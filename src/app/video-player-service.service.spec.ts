import { TestBed } from '@angular/core/testing';

import { VideoPlayerServiceService } from './video-player-service.service';

describe('VideoPlayerServiceService', () => {
  let service: VideoPlayerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPlayerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
