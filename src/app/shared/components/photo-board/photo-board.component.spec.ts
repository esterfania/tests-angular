import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { buildPhotoList } from '../../helpers/Test/Mocks/build-photos.mock';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

describe(PhotoBoardComponent.name, () => {
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let component: PhotoBoardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display rows and columns when @Input photos has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true),
    };
    component.ngOnChanges(change);
    expect(component.rows.length).toBe(2);
  });
  it('should not display rows and columns when @Input photos no has value', () => {
    fixture.detectChanges();
    const change: SimpleChanges = {};
    component.ngOnChanges(change);
    expect(component.rows.length).toBe(0);
  });
});
