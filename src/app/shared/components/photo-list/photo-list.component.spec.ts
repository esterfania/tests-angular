import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotoBoardService } from '../photo-board/services/photo-board.service';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { buildPhotoList } from '../../helpers/Test/Mocks/build-photos.mock';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { Photo } from '../photo-board/interfaces/photo.model';

describe(PhotoListComponent.name, () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientTestingModule],
      providers: [
        {
          provide: PhotoBoardService,
          useValue: {
            getPhotos(): Observable<Photo[]> {
              return of(buildPhotoList());
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should display board when data arrives', () => {
    fixture.detectChanges();
    const board: HTMLElement =
      fixture.nativeElement.querySelector('app-photo-board');
    expect(board).not.toBeNull();
  });
});
