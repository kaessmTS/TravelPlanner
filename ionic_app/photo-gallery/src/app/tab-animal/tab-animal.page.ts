import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DalleImageService } from '../services/dalle-image.service';  // Adjust the path as necessary
import { TitleService } from '../services/title.service';
import { SelectedImageService } from '../services/selected-image.service';

@Component({
  selector: 'app-tab-animal',
  templateUrl: 'tab-animal.page.html',
  styleUrls: ['tab-animal.page.scss']
})
export class TabAnimalPage implements OnInit {
  imageUrls: string[] = [];
  selectedImageIndex: number | null = null;
  previousTab!: string;
  loading: boolean = true;
  imagePrompt: string = 'cute animal, white background, warm colours, manga 2d style, Best Quality, 4K';

  constructor(private dalleImageService: DalleImageService, 
    private titleService: TitleService,
    private selectedImageService: SelectedImageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    localStorage.setItem('selectedTab', 'tab0');
    this.titleService.setTitle('Choose Your Character');
    this.route.queryParams.subscribe(params => {
      if (params['imagePrompt']) {
        this.imagePrompt = params['imagePrompt'];
      }
      if (params['previousTab']) {
        this.previousTab = params['previousTab'];
      }
    });
    console.log(this.imagePrompt)
  }

  async generateImages() {
    this.loading = true;
    try {
      const imagePromises = [
        this.dalleImageService.generateCartoonCharacterImage(this.imagePrompt),
        this.dalleImageService.generateCartoonCharacterImage(this.imagePrompt),
        this.dalleImageService.generateCartoonCharacterImage(this.imagePrompt),
        this.dalleImageService.generateCartoonCharacterImage(this.imagePrompt)
      ];

      this.imageUrls = await Promise.all(imagePromises);
      this.dalleImageService.setAnimalUrls(this.imageUrls);
      console.log('Generated Image URLs:', this.imageUrls);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.loading = false;
    }
  }
  ngOnInit() {
    const savedImageUrls = this.dalleImageService.getAnimalUrls();
    if (savedImageUrls) {
      this.imageUrls = savedImageUrls;
      this.loading = false;
    } else {
      this.generateImages();
    }

    this.route.queryParams.subscribe(params => { // Get the previous tab to know where to go after choosing the character
      this.previousTab = params['previousTab'];
    });
  }
  // Select a character
  selectImage(index: number) {
    this.selectedImageIndex = index; // Remember the index of chosen image
    
    const previousUrlTree = this.router.parseUrl(this.previousTab);  
    const previousUrlPath = previousUrlTree.root.children['primary'].segments.map(segment => segment.path).join('/');
    if (previousUrlPath == 'tabs/tab1') {
      this.selectedImageService.setSelectedImage(this.imageUrls[index]);
    } else if (previousUrlPath == 'tabs/tab2') {
      this.selectedImageService.setSelectedImage1(this.imageUrls[index]);
    } else if (previousUrlPath == 'tabs/tab3') {
      this.selectedImageService.setSelectedImage2(this.imageUrls[index]);
    }
  }
  // Submit the choice of a character
  onButtonClick() {
    let selectedImageUrl;
    const previousUrlTree = this.router.parseUrl(this.previousTab);
    const previousUrlPath = previousUrlTree.root.children['primary'].segments.map(segment => segment.path).join('/');
    
    if (previousUrlPath == 'tabs/tab1') {
      selectedImageUrl = this.selectedImageService.getSelectedImage();
    } else if (previousUrlPath == 'tabs/tab2') {
      selectedImageUrl = this.selectedImageService.getSelectedImage1();
    } else if (previousUrlPath == 'tabs/tab3') {
      selectedImageUrl = this.selectedImageService.getSelectedImage2();
    }

    console.log('Navigating to:', previousUrlPath);
    console.log('With image URL:', selectedImageUrl);

    this.router.navigate([previousUrlPath], { queryParams: { imageUrl: selectedImageUrl } });
  }
}