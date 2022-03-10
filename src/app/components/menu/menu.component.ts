import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  toggleClass: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ocultar(){
    
    this.toggleClass = !this.toggleClass;
    document.getElementById("body")?.classList.toggle("body_move");
    
  }

}
