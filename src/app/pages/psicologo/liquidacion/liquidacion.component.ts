import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { PsicologoService } from '../../../services/psicologo.service';
import { UsuarioModulo } from './../../../../../../vision-frontend/src/app/models/user-modulo.model';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})
export class LiquidacionComponent implements OnInit {

  cols: any[];
  loading: boolean;
  elementos: any[] = [];
  matricula:string;

  constructor(private miServico: PsicologoService) { 

    this.cols = [
              
      { field: 'id_liquidacion', header: 'Nº' , width: '6%'} ,
      { field: 'num_comprobante', header: 'Comprobante' , width: '8%'},
      { field: 'os_liq_bruto', header: 'Bruto' , width: '8%'},
      { field: 'os_desc_fondo_sol', header: 'F. sol',  width: '8%' },
      {field: 'os_desc_matricula', header: 'Matricula' , width: '8%' },
      { field: 'os_descuentos', header: 'Otros',  width: '8%' },      
      { field: 'os_gasto_admin', header: 'Gastos adm.',  width: '8%' },
      { field: 'os_imp_cheque', header: 'Imp. cheque',  width: '8%' },
      { field: 'os_ing_brutos', header: 'Ing. brutos' , width: '8%'},
      { field: 'os_lote_hogar', header: 'Lote h.' , width: '8%'},
      { field: 'os_liq_neto', header: 'A cobrar' , width: '8%'},
      
   ];

  }

  ngOnInit() {
     let usu = JSON.parse(localStorage.getItem('userData'));
     this.matricula = usu['username'];
    this.loadList();
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


  
  loadList(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    this.loading = true;
    try {
        this.miServico.getLiquidacionByPsicologo(userData['username'])
        .subscribe(resp => {
        this.elementos = resp;
            this.loading = false;
            console.log(resp);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert('error','Error al cargar los registros',error,error.status);
    }  
}


throwAlert(estado:string, mensaje:string, motivo:string, errorNumero:string){
  let tipoerror:string;

     if(estado== 'success'){
          swal({
              type: 'success',
              title: 'Exito',
              text: mensaje
            })
      }
      if(estado== 'error'){
        if(errorNumero =='422'){
            mensaje ='Los datos que esta tratando de guardar son iguales a los que ya poseia';
        }
        if(errorNumero =='400 '){
            mensaje ='Bad Request ';
        }
        if(errorNumero =='404'){
            mensaje ='No encontrado ';
        }
        if(errorNumero =='401'){
            mensaje ='Sin autorización';
        }
        if(errorNumero =='403'){
            mensaje =' Prohibido : La consulta fue valida, pero el servidor rechazo la accion. El usuario puede no tener los permisos necesarios, o necesite una cuenta para operar ';
        }
        if(errorNumero =='405'){
            mensaje ='Método no permitido';
        }
        if(errorNumero =='500'){
            mensaje ='Error interno en el servidor';
        }
        if(errorNumero =='503'){
            mensaje ='Servidor no disponible';
        }
        if(errorNumero =='502'){
            mensaje ='Bad gateway';
        }

          swal({   
              type: 'error',
              title: 'Oops...',
              text: mensaje,
              footer: motivo
            })
      }
      if(estado== 'alerta'){
        swal({   
            type: 'warning',
            title: 'Cuidado!',
            text: mensaje,
            footer: motivo
          })
    }
    }
}

