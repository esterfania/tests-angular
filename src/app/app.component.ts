import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './components/photo-board/interfaces/photo.model';
import { PhotoBoardService } from './components/photo-board/services/photo-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular testing';
}
