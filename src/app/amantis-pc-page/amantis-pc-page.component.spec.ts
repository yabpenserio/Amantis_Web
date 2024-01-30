import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisPcPageComponent } from './amantis-pc-page.component';

describe('AmantisPcPageComponent', () => {
  let component: AmantisPcPageComponent;
  let fixture: ComponentFixture<AmantisPcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisPcPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisPcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
