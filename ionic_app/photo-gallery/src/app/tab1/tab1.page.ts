// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DalleImageService } from '../services/dalle-image.service';  // Adjust the path as necessary
import { TitleService } from '../services/title.service';
import { SelectedImageService } from '../services/selected-image.service';

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
    private selectedImageService: SelectedImageService
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
    // console.log(this.imageUrl)
  }
}
