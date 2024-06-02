// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DalleImageService } from '../services/dalle-image.service';  // Adjust the path as necessary

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  imageUrls: string[] = [];

  constructor(private dalleImageService: DalleImageService) {}

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
    this.generateImages();
  }
}
