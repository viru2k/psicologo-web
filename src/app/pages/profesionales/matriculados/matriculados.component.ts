import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriculados',
  templateUrl: './matriculados.component.html',
  styleUrls: ['./matriculados.component.css']
})
export class MatriculadosComponent implements OnInit {
  pdfSrc: string = '../../../../assets/pdf/ACTIVOS_AGOSTO_2018.pdf';
  constructor() { }

  ngOnInit() {
  }

}
