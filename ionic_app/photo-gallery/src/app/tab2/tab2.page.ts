import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['../shared/tabs.styles.scss']
})
export class Tab2Page {

  constructor(private titleService: TitleService) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab2');
    this.titleService.setTitle('Tsinghua Xuetang');
  }
}
