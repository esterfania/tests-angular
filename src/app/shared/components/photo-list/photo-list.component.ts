import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../photo-board/interfaces/photo.model';
import { PhotoBoardService } from '../photo-board/services/photo-board.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) {}
  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
