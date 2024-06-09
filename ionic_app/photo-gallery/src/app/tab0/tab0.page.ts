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
export class Tab0Page implements OnInit {
  imageUrls: string[] = [];
  selectedImageIndex: number | null = null;
  previousTab!: string;
  loading: boolean = true;
  // imagePrompt!: string;

  constructor(private dalleImageService: DalleImageService, 
    private titleService: TitleService,
    private selectedImageService: SelectedImageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab0');
    this.titleService.setTitle('Choose Your Character');
    // this.route.queryParams.subscribe(params => {
    //   this.imagePrompt = params['imagePrompt'];
    // });
  }

  async generateImages() {
    this.loading = true;
    try {
      // console.log(this.imagePrompt)
      const imagePromises = [
        this.dalleImageService.generateCartoonCharacterImage(),
        this.dalleImageService.generateCartoonCharacterImage(),
        this.dalleImageService.generateCartoonCharacterImage(),
        this.dalleImageService.generateCartoonCharacterImage(),
        // this.dalleImageService.generateCartoonCharacterImage(this.imagePrompt)
      ];

      this.imageUrls = await Promise.all(imagePromises);
      this.dalleImageService.setImageUrls(this.imageUrls);
      console.log('Generated Image URLs:', this.imageUrls);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.loading = false;
    }
  }
  ngOnInit() {
    const savedImageUrls = this.dalleImageService.getImageUrls();
    if (savedImageUrls) {
      this.imageUrls = savedImageUrls;
      this.loading = false;
    } else {
      this.generateImages();
    }

    this.route.queryParams.subscribe(params => { // Get the previous tab to know where to go after choosing the character
      this.previousTab = params['previousTab'];
    });
    // this.route.queryParams.subscribe(params => {
    //   this.imagePrompt = params['imagePrompt'];
    // });
  }
  // Select a character
  selectImage(index: number) {
    this.selectedImageIndex = index; // Remember the index of chosen image
    this.selectedImageService.setSelectedImage(this.imageUrls[index]);
  }
  // Submit the choice of a character
  onButtonClick() {
    const selectedImageUrl = this.selectedImageService.getSelectedImage();
    const previousUrlTree = this.router.parseUrl(this.previousTab);
    const previousUrlPath = previousUrlTree.root.children['primary'].segments.map(segment => segment.path).join('/');
    
    console.log('Navigating to:', previousUrlPath);
    console.log('With image URL:', selectedImageUrl);

    this.router.navigate([previousUrlPath], { queryParams: { imageUrl: selectedImageUrl } });
  }
}