import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let componentElement: HTMLElement;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    componentElement = fixture.debugElement.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe(LikeWidgetComponent.prototype.ngOnInit.name, () => {
    it('should generate an id when id is empty', () => {
      component.ngOnInit();
      fixture.detectChanges();

      expect(component.id.startsWith('like-widget')).toBeTrue();
    });

    it('should not generate id when id is present', () => {
      component.id = 'someId';
      fixture.detectChanges();

      expect(component.id).toMatch('someId');
    });
  });

  describe(LikeWidgetComponent.prototype.like.name, () => {
    it('should emit liked when they have a click', () => {
      const spy = spyOn(component.liked, 'emit');
      const elementLike = componentElement.querySelector(
        '.like-widget-container'
      ) as HTMLElement;

      elementLike.click();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit liked when they have a keyup enter', () => {
      const spy = spyOn(component.liked, 'emit').and.callThrough();
      const elementLike = componentElement.querySelector(
        '.like-widget-container'
      ) as HTMLElement;

      elementLike.dispatchEvent(new KeyboardEvent('keyup', { key: 'enter' }));

      expect(spy).toHaveBeenCalled();
    });
  });
});
