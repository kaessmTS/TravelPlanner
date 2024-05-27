import { Injectable } from '@angular/core';
import { ClientOptions, OpenAI } from "openai";

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai;

  constructor() {
    const openaiOptions: ClientOptions = {
      apiKey: '',
      dangerouslyAllowBrowser: true // Enable browser-like environment
    };
    if(openaiOptions.apiKey === '') {
      console.error('Please provide an OpenAI API key');
    }
    this.openai = new OpenAI(openaiOptions);
  }

  async chatGPT(message: string) {
    const completion = await this.openai.chat.completions.create({
      messages: [{ role: "system", content: message }],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0];
  }
}
