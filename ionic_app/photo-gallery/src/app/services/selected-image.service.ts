import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedImageService {
  private selectedImageUrl!: string;
  private selectedImageUrl1!: string;
  private selectedImageUrl2!: string;

  setSelectedImage(url: string) {
    this.selectedImageUrl = url;
  }

  getSelectedImage(): string {
    return this.selectedImageUrl;
  }

  setSelectedImage1(url: string) {
    this.selectedImageUrl1 = url;
  }

  getSelectedImage1(): string {
    return this.selectedImageUrl1;
  }

  setSelectedImage2(url: string) {
    this.selectedImageUrl2 = url;
  }

  getSelectedImage2(): string {
    return this.selectedImageUrl2;
  }
}