import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoService } from '../services/video.service';


@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.css']
})
export class VideoPlayComponent implements OnInit {
  private apiLoaded = false;
  ngOnInit(): void {
  }
  imageObservable: Observable<any> = new Observable<any>();

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService) {
    this.activatedRoute.params.subscribe(data => {
      this.imageObservable = videoService.getImage(data['imageid']);
    })
  }
  
}
