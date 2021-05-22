import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as faceapi from 'face-api.js';
import { ssdMobilenetv1 } from 'face-api.js';

@Injectable({
  providedIn: 'root'
})
export class FaceApiService {

  public globalFace:any;

  private models4Load = [
    faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/assets/models'),
  ];

 public cbModels: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.globalFace = faceapi;
    this.loadModels();
  }

  public loadModels(){
    Promise.all(this.models4Load).then(res => {
      console.log('modelos cargados');
      this.cbModels.emit(true);
    })
  }
}
