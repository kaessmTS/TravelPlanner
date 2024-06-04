// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DalleImageService } from '../services/dalle-image.service';  // Adjust the path as necessary
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-tab0',
  templateUrl: 'tab0.page.html',
  styleUrls: ['tab0.page.scss']
})
export class Tab0Page implements OnInit{
  imageUrls: string[] = [];
  selectedImageIndex: number | null = null;

  constructor(private dalleImageService: DalleImageService, private titleService: TitleService) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab0');
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
    this.generateImages(); // UNCOMMENT THIS LINE TO GENERATE IMAGES
    this.titleService.setTitle('Choose Your Character');
  }
  ngOnChanges() {
    this.titleService.setTitle('Choose Your Character');
  }
  selectImage(index: number) {
    this.selectedImageIndex = index;
  }
}
