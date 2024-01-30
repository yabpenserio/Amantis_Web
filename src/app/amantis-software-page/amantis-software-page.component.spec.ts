import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisSoftwarePageComponent } from './amantis-software-page.component';

describe('AmantisSoftwarePageComponent', () => {
  let component: AmantisSoftwarePageComponent;
  let fixture: ComponentFixture<AmantisSoftwarePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisSoftwarePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisSoftwarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
