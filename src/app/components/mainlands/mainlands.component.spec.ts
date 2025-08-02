import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlandsComponent } from './mainlands.component';

describe('MainlandsComponent', () => {
  let component: MainlandsComponent;
  let fixture: ComponentFixture<MainlandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainlandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
