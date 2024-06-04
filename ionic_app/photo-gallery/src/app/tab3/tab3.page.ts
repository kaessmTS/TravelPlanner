import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private titleService: TitleService) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab3');
  }
  ngOnInit() {
    // this.generateImages(); // UNCOMMENT THIS TO GENERATE IMAGES
    this.titleService.setTitle('Tsinghua Auditorium');
  }
}
