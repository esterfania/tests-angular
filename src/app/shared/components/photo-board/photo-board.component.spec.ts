import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './interfaces/photo.model';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

function buildPhotoList(): Photo[] {
  const photos = [
    { id: '1', url: 'http://minhafoto.jpg', description: 'picture of test' },
    { id: '2', url: 'http://minhafoto2.jpg', description: 'picture of test2' },
    { id: '3', url: 'http://minhafoto3.jpg', description: 'picture of test3' },
    { id: '4', url: 'http://minhafoto4.jpg', description: 'picture of test4' },
    { id: '5', url: 'http://minhafoto5.jpg', description: 'picture of test5' },
    { id: '6', url: 'http://minhafoto6.jpg', description: 'picture of test6' },
  ];
  return photos;
}

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
});
