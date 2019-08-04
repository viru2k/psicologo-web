import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-psicologo',
  templateUrl: './cursos-psicologo.component.html',
  styleUrls: ['./cursos-psicologo.component.css']
})
export class CursosPsicologoComponent implements OnInit {

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
