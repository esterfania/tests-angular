import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoBoardModule } from '../photo-board/photo-board.module';
import { PhotoListComponent } from './photo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, PhotoBoardModule, FontAwesomeModule],
  exports: [PhotoListComponent],
  declarations: [PhotoListComponent],
})
export class PhotoListModule {}
