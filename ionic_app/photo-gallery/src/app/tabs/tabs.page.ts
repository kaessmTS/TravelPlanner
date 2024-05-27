import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  question: string = ''; // Initialize with an empty string

  constructor(private openaiService: OpenaiService) {}

  async sendQuestion() {
    const completion = await this.openaiService.chatGPT(this.question);
    console.log(completion);
  }
}
