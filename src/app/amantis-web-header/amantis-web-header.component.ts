import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amantis-web-header',
  standalone: true,
  imports: [],
  templateUrl: './amantis-web-header.component.html',
  styleUrl: './amantis-web-header.component.css'
})
export class AmantisWebHeaderComponent implements OnInit {
  public active : boolean = false 

  constructor() { }
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }

}
