import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messages: { text: string, isResponse?: boolean }[] = []; // Array to store chat messages with isResponse flag
  newMessage: string = ''; // Variable to store new message

  constructor(private openaiService: OpenaiService) { }

  // Function to send a message
  sendMessage() {
    let trimmed_msg = this.newMessage.trim();
    if (trimmed_msg !== '' && (this.messages.length == 0 || this.messages[this.messages.length-1].text !== 'typing ...')) {
      this.newMessage = ''; // Clear input field after sending message
      this.messages.push({ text: trimmed_msg });
      this.messages.push({ text: "typing ...", isResponse: true });
      this.openaiService.chatGPT(trimmed_msg).then((response) => {
        var responseMessage: string = "";
        if (response.message.content != undefined && response.message.content != null) {
          responseMessage = response.message.content;
        }
        this.messages.pop();
        this.messages.push({ text: responseMessage, isResponse: true });
      }).catch(error => {
        console.error('error:', error);
      });
    }
  }

  // Function to get the latest 3 messages
  latestMessages() {
    return this.messages.slice(-3);
  }
}
