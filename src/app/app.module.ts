import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';
import { CommonModule } from '@angular/common';
import { PhotoBoardModule } from './shared/components/photo-board/photo-board.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule,
    PhotoFrameModule,
    PhotoBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
