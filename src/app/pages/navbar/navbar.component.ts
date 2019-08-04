import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navbarOpen = false;

  toggleNavbar() {

    
    console.log(this.navbarOpen);
    this.navbarOpen = !this.navbarOpen;
  }
  isCollapse = false;   // guardamos el valor
  toggleState() { // manejador del evento
      let foo = this.isCollapse;
      this.isCollapse = foo === false ? true : false; 
  }
}
