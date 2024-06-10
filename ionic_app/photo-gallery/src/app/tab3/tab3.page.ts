import { Component, OnInit } from '@angular/core';
import { DalleImageService } from '../services/dalle-image.service';
import { TitleService } from '../services/title.service';
import { SelectedImageService } from '../services/selected-image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['../shared/tabs.styles.scss']
})
export class Tab3Page {
  imageUrls: string[] = [];
  imageUrl!: string;


  constructor(
    private dalleImageService: DalleImageService, 
    private titleService: TitleService,
    private selectedImageService: SelectedImageService,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab3');
    this.titleService.setTitle('Tsinghua Auditorium');

    this.route.queryParams.subscribe(params => {
      this.imageUrl = params['imageUrl'] || this.selectedImageService.getSelectedImage2();
    });
    console.log(this.imageUrl);
  }
}
