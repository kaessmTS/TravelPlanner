// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DalleImageService } from '../services/dalle-image.service';  // Adjust the path as necessary
import { TitleService } from '../services/title.service';
import { SelectedImageService } from '../services/selected-image.service';

@Component({
  selector: 'app-tab0',
  templateUrl: 'tab0.page.html',
  styleUrls: ['tab0.page.scss']
})
export class Tab0Page implements OnInit{
  imageUrls: string[] = [];
  selectedImageIndex: number | null = null;
  previousTab!: string;

  constructor(private dalleImageService: DalleImageService, 
    private titleService: TitleService,
    private selectedImageService: SelectedImageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab0');
    this.titleService.setTitle('Choose Your Character');
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
    this.route.queryParams.subscribe(params => { // Get the previous tab to know where to go after choosing the character
      this.previousTab = params['previousTab'];
    });
  }
  // Select a character
  selectImage(index: number) {
    this.selectedImageIndex = index; // Remember the index of chosen image
    this.selectedImageService.setSelectedImage(this.imageUrls[index]);
  }
  // Submit the choice of a character
  onButtonClick() {
    // console.log('Button clicked!');
    // this.router.navigateByUrl(this.previousTab)
    const selectedImageUrl = this.selectedImageService.getSelectedImage();
    console.log('Image: ' + selectedImageUrl)
    this.router.navigate([this.previousTab], { queryParams: { imageUrl: selectedImageUrl } });
  }
}