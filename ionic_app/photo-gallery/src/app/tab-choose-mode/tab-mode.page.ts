import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DalleImageService } from '../services/dalle-image.service';  // Adjust the path as necessary
import { TitleService } from '../services/title.service';
import { SelectedImageService } from '../services/selected-image.service';

@Component({
  selector: 'app-tab-mode',
  templateUrl: 'tab-mode.page.html',
  styleUrls: ['tab-mode.page.scss']
})
export class TabModePage implements OnInit {
  imageUrls: string[] = [];
  selectedImageIndex: number | null = null;
  previousTab!: string;
  loading: boolean = true;

  constructor(private dalleImageService: DalleImageService, 
    private titleService: TitleService,
    private selectedImageService: SelectedImageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab-mode');
    this.titleService.setTitle('Choose Your Mode');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.previousTab = params['previousTab'];
    });
  }
  // Submit the choice of a character
  onButtonClick(param: string, path: string) {
    console.log(path);
    this.router.navigate([path], { queryParams: { imagePrompt: param, previousTab: this.previousTab } });
  }
}