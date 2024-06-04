import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/title.service'; // adjust the path accordingly

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title!: string;

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.currentTitle.subscribe(title => this.title = title);
  }
}