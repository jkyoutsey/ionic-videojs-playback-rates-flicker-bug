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
          src: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
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
