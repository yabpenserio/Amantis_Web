import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisWebFooterComponent } from './amantis-web-footer.component';

describe('AmantisWebFooterComponent', () => {
  let component: AmantisWebFooterComponent;
  let fixture: ComponentFixture<AmantisWebFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisWebFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisWebFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
