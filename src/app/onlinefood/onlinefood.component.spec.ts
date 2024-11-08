import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinefoodComponent } from './onlinefood.component';

describe('OnlinefoodComponent', () => {
  let component: OnlinefoodComponent;
  let fixture: ComponentFixture<OnlinefoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlinefoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlinefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
