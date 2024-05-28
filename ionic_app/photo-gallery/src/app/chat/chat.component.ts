import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../openai.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: { text: string, isResponse?: boolean }[] = []; // Array to store chat messages with isResponse flags
  newMessage: string = ''; // Variable to store new message
  hiddenMessage: string = ''; // Variable to store the hidden message based on the page
  currentTime: string = ''; // Variable to store the current time
  timeInterval: any; // Variable to store the interval reference

  constructor(private openaiService: OpenaiService) {}

  ngOnInit() {
    this.updateTime(); // Update the time initially
  
    // Update the time every minute
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 60000); // 60000 milliseconds = 1 minute
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed to avoid memory leaks
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    // Format the time to 12-hour format
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}${hours >= 12 ? 'pm' : 'am'}`;
    this.currentTime = formattedTime;

    console.log('Current time:', this.currentTime); // Log the current time for debugging
  }

  // Function to send a message
  sendMessage() {
    let trimmed_msg = this.newMessage.trim();
    if (trimmed_msg !== '' && (this.messages.length == 0 || this.messages[this.messages.length - 1].text !== 'typing ...')) {

      this.newMessage = ''; // Clear input field after sending message
      this.messages.push({ text: trimmed_msg });
      this.messages.push({ text: "typing ...", isResponse: true });

      // Prepend hidden message only if it's the first message
      let messageToSend = this.messages.length === 1 ? this.hiddenMessage + trimmed_msg : trimmed_msg;
      console.log('User sent:', messageToSend); // Log the sent message to the console

      this.openaiService.chatGPT(messageToSend, this.currentTime).then((response) => {
        var responseMessage: string = "";

        if (response.content != undefined && response.content != null) {
          responseMessage = response.content;
        }

        this.messages.pop();
        this.messages.push({ text: responseMessage, isResponse: true }); // Include the response message
        console.log('Response received:', responseMessage); // Log the received response to the console
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  }

  // Function to get the latest 3 messages
  latestMessages() {
    return this.messages.slice(-3);
  }
}
