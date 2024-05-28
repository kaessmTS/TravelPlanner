import { Injectable } from '@angular/core';
import { ClientOptions, OpenAI} from "openai";
import { ChatCompletionMessageParam } from 'openai/resources';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai;
  private conversationHistory: ChatCompletionMessageParam[] = [];

  constructor() {
    const openaiOptions: ClientOptions = {
      apiKey: '',
      dangerouslyAllowBrowser: true // Enable browser-like environment
    };
    if (openaiOptions.apiKey === '') {
      console.error('Please provide an OpenAI API key');
    }
    this.openai = new OpenAI(openaiOptions);
  }

  async chatGPT(userMessage: string, currentTime: string) {
    if (this.conversationHistory.length === 0) {
      const hiddenMessage = this.getHiddenMessage(currentTime); // Get the hidden message
      if (hiddenMessage) {
        this.conversationHistory.push({ role: "system", content: hiddenMessage });
      }
    }
    // Add the user's message to the conversation history
    this.conversationHistory.push({ role: "user", content: userMessage });

    // Include the conversation history in the request
    const completion = await this.openai.chat.completions.create({
      messages: this.conversationHistory,
      model: "gpt-3.5-turbo",
    });

    const responseMessage = completion.choices[0].message;

    // Add the assistant's response to the conversation history
    this.conversationHistory.push({ role: "assistant", content: responseMessage.content?responseMessage.content:''});

    return responseMessage;
  }

  // Optionally, you can add a method to clear the conversation history if needed
  clearConversationHistory() {
    this.conversationHistory = [];
  }

  private getHiddenMessage(currentTime: string): string | null {
    // Implementation to get the hidden message based on the selected tab
    const selectedTab = localStorage.getItem('selectedTab');
    switch (selectedTab) {
      case 'tab1':
        return `Imagine that you are the Main Building in Tsinghua University. Now it is ${currentTime}. You are opened from 7am to 11pm (awake). At night you sleep and act tired. `;
      case 'tab2':
        return `Imagine that you are Tsinghua Xuetang in Tsinghua University. Now it is ${currentTime}. You are opened from 8am to 9pm (awake). At night you sleep and act tired. `;
      case 'tab3':
        return `Imagine that you are Tsinghua Auditorium in Tsinghua University. Now it is ${currentTime}. You are opened from 11am to 12pm (awake). At night you sleep and act tired. `;
      default:
        return null;
    }
  }

}