import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseExComponent } from './mouse-ex.component';

describe('MouseExComponent', () => {
  let component: MouseExComponent;
  let fixture: ComponentFixture<MouseExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
