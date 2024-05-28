import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  question: string = ''; // Initialize with an empty string

  constructor(private openaiService: OpenaiService, private menu: MenuController, private router: Router) {}

  async sendQuestion() {
    const completion = await this.openaiService.chatGPT(this.question, '');
    console.log(completion);
  }

  navigateTo(url: string) {
    this.openaiService.clearConversationHistory();
    this.router.navigateByUrl(url);
    this.menu.close(); // Close the menu after navigation
  }
}
