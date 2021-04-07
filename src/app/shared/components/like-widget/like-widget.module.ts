import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@NgModule({
  declarations: [LikeWidgetComponent],
  exports: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {}
