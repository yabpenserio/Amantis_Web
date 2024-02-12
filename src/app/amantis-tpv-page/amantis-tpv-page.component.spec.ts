import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisTpvPageComponent } from './amantis-tpv-page.component';

describe('AmantisTpvPageComponent', () => {
  let component: AmantisTpvPageComponent;
  let fixture: ComponentFixture<AmantisTpvPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisTpvPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisTpvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
