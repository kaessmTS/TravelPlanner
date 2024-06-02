import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

import {MobileNet} from '@tensorflow-models/mobilenet';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  model: any;
  

  constructor() {
    this.model = MobileNet.load();
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

  // Classify the image.
  const predictions = await this.model.classify(capturedPhoto);

  console.log('Predictions: ');
  console.log(predictions);
  }
}

