import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourletComponent } from './tourlet.component';

describe('TourletComponent', () => {
  let component: TourletComponent;
  let fixture: ComponentFixture<TourletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
