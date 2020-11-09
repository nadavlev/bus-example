import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNavigationContainerComponent } from './bus-navigation-container.component';

describe('BusNavigationContainerComponent', () => {
  let component: BusNavigationContainerComponent;
  let fixture: ComponentFixture<BusNavigationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusNavigationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusNavigationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
