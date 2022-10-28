import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObeservableDemoComponent } from './obeservable-demo.component';

describe('ObeservableDemoComponent', () => {
  let component: ObeservableDemoComponent;
  let fixture: ComponentFixture<ObeservableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObeservableDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObeservableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
