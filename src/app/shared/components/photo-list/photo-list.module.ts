import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoBoardModule } from '../photo-board/photo-board.module';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
  imports: [CommonModule, PhotoBoardModule],
  exports: [PhotoListComponent],
  declarations: [PhotoListComponent],
})
export class PhotoListModule {}
