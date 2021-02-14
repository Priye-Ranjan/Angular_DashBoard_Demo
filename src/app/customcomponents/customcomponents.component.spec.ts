import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcomponentsComponent } from './customcomponents.component';

describe('CustomcomponentsComponent', () => {
  let component: CustomcomponentsComponent;
  let fixture: ComponentFixture<CustomcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomcomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
