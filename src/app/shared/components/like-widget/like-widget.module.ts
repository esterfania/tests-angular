import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { ActionDirectiveModule } from '../../directives/action/action.module';

@NgModule({
  declarations: [LikeWidgetComponent],
  exports: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule, ActionDirectiveModule],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {}
