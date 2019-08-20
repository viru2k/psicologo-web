





import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { NgModule, LOCALE_ID, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData,LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS,HttpClientModule  } from '@angular/common/http';
import {MatInputModule, MatTableModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatSortModule } from '@angular/material';

/** LIBRERIAS 3RO**/
import {OrderListModule} from 'primeng/orderlist';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';

import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {SpinnerModule} from 'primeng/spinner';
import {ToastModule} from 'primeng/toast';
import { DynamicDialogModule } from "primeng/dynamicdialog";
import {ListboxModule} from 'primeng/listbox';
import {MenuItem, MessageService,DialogService} from 'primeng/api';



import localeEsAR from '@angular/common/locales/es-AR';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AutofocusModule } from 'angular-autofocus-fix'; 


/** COMPONENTES **/
import { AppComponent } from './app.component';


/** DIRECTIVAS **/



import { ROUTES } from './app.routes';
import { NgxPopper } from 'angular-popper';




import { InicioComponent } from './pages/inicio/inicio.component';
import { HistoriaComponent } from './pages/institucional/historia/historia.component';
import { AutoridadesComponent } from './pages/institucional/autoridades/autoridades.component';
import { LegislacionComponent } from './pages/institucional/legislacion/legislacion.component';
import { GeneralComponent } from './pages/secretaria/general/general.component';
import { AccionsocialComponent } from './pages/secretaria/accionsocial/accionsocial.component';
import { AsuntosprofComponent } from './pages/secretaria/asuntosprof/asuntosprof.component';
import { CientificaComponent } from './pages/secretaria/cientifica/cientifica.component';
import { ArancelesComponent } from './pages/profesionales/aranceles/aranceles.component';
import { FacturacionComponent } from './pages/profesionales/facturacion/facturacion.component';
import { MatriculadosComponent } from './pages/profesionales/matriculados/matriculados.component';
import { AutorizacionesComponent } from './pages/autorizaciones/autorizaciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { SecretariaComponent } from './pages/secretaria/secretaria.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { LoadingComponent } from './loading/loading.component';



import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { CdkTableModule } from '@angular/cdk/table';
import { LoginComponent } from './pages/psicologo/login/login.component';
import { LiquidacionComponent } from './pages/psicologo/liquidacion/liquidacion.component';
import { PrincipalComponent } from './pages/psicologo/principal/principal.component';
import { NovedadesComponent } from './pages/psicologo/novedades/novedades.component';
import { CursosPsicologoComponent } from './pages/psicologo/cursos-psicologo/cursos-psicologo.component';
import { NoticiasComponent } from './pages/psicologo/noticias/noticias.component';



import { PdfViewerModule } from 'ng2-pdf-viewer';
import {GalleriaModule} from 'primeng/galleria';
import {FileUploadModule} from 'primeng/fileupload';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import {CardModule} from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';


import {DropdownModule} from 'primeng/dropdown';

import {InputTextareaModule} from 'primeng/inputtextarea';
import { PopupLiquidacionDetalleComponent } from './shared/components/popup/popup-liquidacion-detalle/popup-liquidacion-detalle.component';


 


registerLocaleData(localeEsAR, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,    
InicioComponent ,
HistoriaComponent,
AutoridadesComponent,
LegislacionComponent,
GeneralComponent ,
AccionsocialComponent,
AsuntosprofComponent ,
CientificaComponent ,
ArancelesComponent,
FacturacionComponent,
MatriculadosComponent,
AutorizacionesComponent,
ContactoComponent,
GestionComponent,
NavbarComponent,
InstitucionalComponent,
SecretariaComponent,
ProfesionalesComponent,
LoadingComponent, 
    LoadingComponent, 
    LoginComponent,
     LiquidacionComponent, 
     PrincipalComponent,
      NovedadesComponent, 
      CursosPsicologoComponent,
       NoticiasComponent,
        PopupLiquidacionDetalleComponent


    
  
 
  ],
  imports: [
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    CdkTableModule ,
    MatTableModule,
    
    //TableModule,
    //DropdownModule,
    MatTableModule ,
    DialogModule,
    RadioButtonModule,
    CalendarModule,
    InputMaskModule,
    MenubarModule,
    MenuModule,
    CheckboxModule,
    SpinnerModule,
    ToastModule,
    ListboxModule,
    OverlayPanelModule,
    DynamicDialogModule,
    OrderListModule,
    SweetAlert2Module.forRoot(),
    AutofocusModule,
      RouterModule.forRoot( ROUTES, { useHash: true } ),
      NgxPopper
  ],
  entryComponents: [
    PopupLiquidacionDetalleComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' },{
    provide: HTTP_INTERCEPTORS,
    useFactory: function(injector: Injector) {
        return new JwtInterceptor(injector);
    },
    multi: true,
    deps: [Injector]
  },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

