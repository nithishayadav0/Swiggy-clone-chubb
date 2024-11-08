import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsOnMindComponent } from './whats-on-mind.component';

describe('WhatsOnMindComponent', () => {
  let component: WhatsOnMindComponent;
  let fixture: ComponentFixture<WhatsOnMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsOnMindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsOnMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
