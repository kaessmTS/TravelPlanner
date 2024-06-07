import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedImageService {
  private selectedImageUrl!: string;

  setSelectedImage(url: string) {
    this.selectedImageUrl = url;
  }

  getSelectedImage(): string {
    return this.selectedImageUrl;
  }
}