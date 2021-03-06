import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() liked: EventEmitter<void> = new EventEmitter();
  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;
  private debounceSubject = new Subject();
  private unsubscribe = new Subject();
  ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.liked.emit());
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  like(): void {
    this.debounceSubject.next();
  }
}
