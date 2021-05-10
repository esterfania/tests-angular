import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should trigger (@Output liked) once when called multiple times within debounce time', fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    component.like();
    tick(500);
    expect(times).toBe(1);
  }));
  it('Should trigger (@Output liked) two times when called outside debounce time', fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    tick(500);
    component.like();
    tick(500);
    expect(times).toBe(2);
  }));
  it('should display number of likes when (@Input likes) is incremented', () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector(
      '.like-counter'
    );
    expect(element.textContent.trim()).toBe('0');

    component.likes++;
    fixture.detectChanges();

    expect(element.textContent.trim()).toBe('1');
  });
  it('should update aria-label when (@Input likes) is incremented', () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector(
      '.like-counter'
    );
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it('should have aria-label with 0 (@Input likes) value', () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector(
      '.like-counter'
    );
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });
  it('should display image with src and description when bound to properties', () => {
    const description = 'some description';
    const src = 'http://somesite.com/img.jpg';
    component.src = src;
    component.description = description;
    fixture.detectChanges();

    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe('http://somesite.com/img.jpg');
    expect(img.getAttribute('alt')).toBe('some description');
  });
});
