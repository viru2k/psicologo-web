import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';
import swal from 'sweetalert2';
import { UserService } from '../../../services/user.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:User;
  loggedIn:boolean = false;
  public username:string;
  elemento:User = null;
  elementoModulo:[] = null;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor( private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private miServico:UserService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
   
if(currentUser['access_token'] != ''){
  let userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData);
  console.log('usuario logueado');
  this.loggedIn = true;
     this.username = userData['username'];
     console.log(userData);
     
}else{
  console.log("sin credenciales");
  this.throwAlert('warning','','', '403');
}
   
}




get f() { return this.loginForm.controls; }
onSubmit() {
   
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  } 

  this.loading = true;
  this.authenticationService.login(this.f.username.value, this.f.password.value)
     // .pipe(first())
      .subscribe(
          data => {
            this.user = data;
            let us = new User("","","","","",this.f.username.value,this.f.password.value,[]);
            localStorage.setItem('userData', JSON.stringify(us));
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            //  this.router.navigate([this.returnUrl]);
            this.loadUser();
          },
          error => {
         
            console.log(error);
              this.error = error;
              this.loading = false;
          });
}

ver(){
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser['access_token']);
}

loadUser(){

this.loading = true;
try {
  this.miServico.getItemInfoAndMenu(this.f.username.value)
    .subscribe(resp => {
    this.elemento = resp;
   // this.elementoModulo = this.elemento["access_list"]
       let currentUser =  JSON.parse(localStorage.getItem('currentUser'));
       let userData = JSON.parse(localStorage.getItem('userData'));
       console.log(this.elemento);
       this.elementoModulo = <any>this.elemento;
      this.user = new User(this.elemento[0]['id'] , this.elemento[0]['email'], this.elemento[0]['nombreyapellido'],
       this.elemento[0]['name'],'1',this.elemento[0]['email'], currentUser['access_token'],this.elementoModulo);
       this.username = userData['username'];
       localStorage.removeItem('userData');
       localStorage.setItem('userData', JSON.stringify(this.user));
      // this.asignarModulos(this.elementoModulo);
     // console.log(this.user);
        this.loading = false;
        console.log('logueado');
        this.loggedIn = true;
        this.router.navigate(['/psicologo/principal']);
    //  this.menuList();
    },
    error => { // error path
        
        console.log(error.message);
        console.log(error.status);
        localStorage.removeItem('error');
        localStorage.setItem('error', JSON.stringify(error));
         
    //    this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message);
     });    
} catch (error) {
//  this.throwAlert('error','Error al cargar los registros',error);
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

  if(errorNumero =='422'){
    mensaje ='Los datos que esta tratando de guardar son iguales a los que ya poseia';
    swal({   
        type: 'warning',
        title: 'Atención..',
        text: mensaje,
        footer: motivo
      })
}

if(errorNumero =='403'){
  mensaje =' Prohibido : La consulta fue valida, pero el servidor rechazo la accion. El usuario puede no tener los permisos necesarios, o necesite una cuenta para operar ';
  swal({   
      type: 'warning',
      title: 'Problemas con la sesion..',
      text: mensaje,
      footer: motivo
    })
}

if(errorNumero =='99'){
  mensaje ='Debe seleccionar un paciente antes de cargar las prácticas';
  swal({   
      type: 'warning',
      title: 'Atención..',
      text: mensaje,
      footer: motivo
    })
}

if(errorNumero =='100'){
  mensaje ='El paciente posee una obra social que no esta habilitada';
  swal({   
      type: 'warning',
      title: 'Atención..',
      text: mensaje,
      footer: motivo
    })
}
  if(estado == 'warning'){
    
    swal({   
        type: 'warning',
        title: 'Atención..',
        text: mensaje,
        footer: motivo
      })
  }
  
  if((estado== 'error')&&(errorNumero!='422')&&(errorNumero!='403')){
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


}
}

