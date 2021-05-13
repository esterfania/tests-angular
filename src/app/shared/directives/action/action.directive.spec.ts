import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it('Output appAction should emit event when enter key is pressed', () => {
    fixture.detectChanges();
    const divElement: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    divElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'enter' }));
    expect(component.hasEvent()).toBeTrue();
  });

  it('Output appAction should emit event when has click', () => {
    fixture.detectChanges();
    const divElement: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    divElement.click();
    expect(component.hasEvent()).toBeTrue();
  });
});

@Component({
  template: `<div
    class="dummy-component"
    (appAction)="actionHandler($event)"
  ></div>`,
})
class ActionDirectiveTestComponent {
  private event: Event = null;
  actionHandler(event: Event): void {
    this.event = event;
  }
  hasEvent(): boolean {
    return !!this.event;
  }
}
