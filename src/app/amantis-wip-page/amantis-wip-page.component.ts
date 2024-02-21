import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amantis-wip-page',
  standalone: true,
  imports: [],
  templateUrl: './amantis-wip-page.component.html',
  styleUrl: './amantis-wip-page.component.css'
})
export class AmantisWipPageComponent {
  constructor(
    public router:Router,
  ){}
  navContact(){
    this.router.navigate(['contact_page'])
  }

}
