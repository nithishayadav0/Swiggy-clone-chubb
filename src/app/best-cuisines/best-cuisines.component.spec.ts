import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCuisinesComponent } from './best-cuisines.component';
import { HttpClientModule } from '@angular/common/http';

describe('BestCuisinesComponent', () => {
  let component: BestCuisinesComponent;
  let fixture: ComponentFixture<BestCuisinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestCuisinesComponent,HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestCuisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
