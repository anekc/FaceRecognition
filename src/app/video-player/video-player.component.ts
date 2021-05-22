import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FaceApiService } from '../face-api.service';
import { VideoPlayerServiceService } from '../video-player-service.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('videoElement') videoElement: ElementRef;
  @Input() stream: any;
  @Input() width: number;
  @Input() height: number;
  modelsReady: boolean;
  listEvents: Array<any> = [];



  constructor(private renderer2: Renderer2, private elementRef: ElementRef, private faceApiService: FaceApiService, private videoPlayerService: VideoPlayerServiceService) { }

  ngOnInit(): void {
    this.listenerEvents();
  }

  ngOnDestroy(): void {
    this.listEvents.forEach(event => event.unsubscribe());
  }

  listenerEvents = () => {
    const observer1$ = this.faceApiService.cbModels.subscribe(res => {
      //: TODO Los modelos estan ready!!
      this.modelsReady = true;
      this.checkFace();
    });
    this.listEvents = [observer1$];

  }

  checkFace = () => {
    setInterval(async () => {
      await this.videoPlayerService.getLandMark(this.videoElement);
    }, 100);
  };

  loadedMetaData(): void {
    this.videoElement.nativeElement.play();
  }

  listenerPlay(){

  }

}
