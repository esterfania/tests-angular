import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardComponent } from './photo-board.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from './services/photo-board.service';

@NgModule({
  imports: [CommonModule, PhotoFrameModule, HttpClientModule],
  exports: [PhotoBoardComponent],
  declarations: [PhotoBoardComponent],
  providers: [PhotoBoardService],
})
export class PhotoBoardModule {}
