import { ElementRef, Injectable } from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerControllerService {
  private player: Player | undefined;

  initPlayer(videoPlayer: ElementRef | undefined) {
    let options = {
      preload: 'auto',
      controls: true,
      fluid: true,
      autoplay: false,
      enableSmoothSeeking: true,
      playbackRates: [0.5, 1, 1.5, 2],
      controlBar: {
        subsCapsButton: false,
      },
      sources: [
        {
          src: 'https://player.vimeo.com/play/38042c7a-bf4b-4092-9b1f-b41206bc0dd9/hls.m3u8?s=895052965_1708097478_c416d428022cdbbb15738edf0e7ca4f9&context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&oauth2_token_id=1749201174',
        },
      ],
      // videojs doesn't have a type for options, so we need to cast it to any
    } as any;

    this.player = videojs(videoPlayer?.nativeElement, options, () =>
      this.afterPlayerInit()
    );
  }

  private afterPlayerInit() {}
}
