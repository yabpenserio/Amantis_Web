import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amantis-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './amantis-landing-page.component.html',
  styleUrl: './amantis-landing-page.component.css'
})
export class AmantisLandingPageComponent {
  constructor(
    public router:Router,
  ){}
  navContact(){
    this.router.navigate(['contact_page'])
  }
  navStore(){
    this.router.navigate(['wip_page'])
  }


}
