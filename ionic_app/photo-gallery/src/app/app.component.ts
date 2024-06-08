import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/title.service'; // adjust the path accordingly
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title!: string;
  isTab0: boolean = false;

  constructor(private titleService: TitleService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.titleService.currentTitle.subscribe(title => this.title = title);
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  checkRoute() {
    this.isTab0 = this.router.url.includes('/tab0');
  }

  onButtonClick() {
    console.log('ROUTE: ' + this.router.url)
    this.router.navigate(['/tabs/tab0'], { queryParams: { previousTab: this.router.url } })
  }
}