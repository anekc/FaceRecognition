import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  public currentStream: any;
  public dimensionVideo: any;

  
  ngOnInit(): void {
    this.checkMediaSource();
    this.getSizeCam();
  }

  checkMediaSource = () => {
    if (navigator && navigator.mediaDevices){
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio:false
      }).then(stream => {
this.currentStream = stream;
      }).catch(() => {
        console.log('no permissions');
      })
    } else {
      console.log('Not found media devices');
    }
  }
  getSizeCam(){

const elementCam: HTMLElement = document.querySelector('.cam');

const {width, height} = elementCam.getBoundingClientRect();
this.dimensionVideo = {width, height};
  }

}





