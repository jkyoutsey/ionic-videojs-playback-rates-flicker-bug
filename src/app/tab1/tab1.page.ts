import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PlayerControllerService } from '../player-controller/player-controller.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class Tab1Page implements AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) private videoPlayer:
    | ElementRef
    | undefined;
  private readonly controller = inject(PlayerControllerService);

  ngAfterViewInit() {
    this.controller.initPlayer(this.videoPlayer);
  }
}
