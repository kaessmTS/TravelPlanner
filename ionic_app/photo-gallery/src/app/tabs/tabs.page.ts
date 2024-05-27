import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';
<<<<<<< HEAD
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
=======
>>>>>>> 53d168281a29d6070f15a6ea5b08c57371493543

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  question: string = ''; // Initialize with an empty string

<<<<<<< HEAD
  constructor(private openaiService: OpenaiService, private menu: MenuController, private router: Router) {}
=======
  constructor(private openaiService: OpenaiService) {}
>>>>>>> 53d168281a29d6070f15a6ea5b08c57371493543

  async sendQuestion() {
    const completion = await this.openaiService.chatGPT(this.question);
    console.log(completion);
  }
<<<<<<< HEAD

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
    this.menu.close(); // Close the menu after navigation
  }
=======
>>>>>>> 53d168281a29d6070f15a6ea5b08c57371493543
}
