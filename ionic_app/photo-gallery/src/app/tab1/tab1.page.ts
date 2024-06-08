import { Component, OnInit } from '@angular/core';
import { DalleImageService } from '../services/dalle-image.service';  // Adjust the path as necessary
import { TitleService } from '../services/title.service';
import { SelectedImageService } from '../services/selected-image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['../shared/tabs.styles.scss']
})
export class Tab1Page implements OnInit{
  imageUrls: string[] = [];
  imageUrl!: string;

  constructor(
    private dalleImageService: DalleImageService, 
    private titleService: TitleService,
    private selectedImageService: SelectedImageService,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab1');
  }

  async generateImages() {
    try {
      const imagePromises = [
        this.dalleImageService.generateCartoonCharacterImage(),
        this.dalleImageService.generateCartoonCharacterImage(),
        this.dalleImageService.generateCartoonCharacterImage(),
        this.dalleImageService.generateCartoonCharacterImage()
      ];

      this.imageUrls = await Promise.all(imagePromises);
      console.log('Generated Image URLs:', this.imageUrls);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  ngOnInit() {
    // this.generateImages(); // UNCOMMENT THIS TO GENERATE IMAGES
    this.titleService.setTitle('The Main Building');
    // this.imageUrl = this.selectedImageService.getSelectedImage();
    this.route.queryParams.subscribe(params => {
      this.imageUrl = params['imageUrl'];
    });
    console.log(this.imageUrl)
  }
  afterRender() {
    // this.imageUrl = this.selectedImageService.getSelectedImage();
    // console.log(this.imageUrl)
    this.route.queryParams.subscribe(params => {
      this.imageUrl = params['imageUrl'];
    });
  }
  // ngDoCheck() {
  //   this.titleService.setTitle('The Main Building');
  // }
}
