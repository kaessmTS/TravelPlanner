import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['../shared/tabs.styles.scss']
})
export class Tab3Page {

  constructor(private titleService: TitleService) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab3');
    this.titleService.setTitle('Tsinghua Auditorium');
  }
}
