import { Injectable } from '@angular/core';
import { FaceApiService } from './face-api.service';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerServiceService {

  constructor(private faceappApiService: FaceApiService) {
    

   }

   getLandMark(videoElement: any){
    const {globalFace} = this.faceappApiService;
    const {videoWidth, videoHeight} = videoElement.nativeElement;
    const displaySize = {width: videoWidth, height: videoHeight}
    console.log(displaySize);

   }
}
