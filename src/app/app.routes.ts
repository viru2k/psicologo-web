import { Routes } from '@angular/router';
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
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { SecretariaComponent } from './pages/secretaria/secretaria.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { LoginComponent } from './pages/psicologo/login/login.component';
import { LiquidacionComponent } from './pages/psicologo/liquidacion/liquidacion.component';
import { CursosPsicologoComponent } from './pages/psicologo/cursos-psicologo/cursos-psicologo.component';
import { PrincipalComponent } from './pages/psicologo/principal/principal.component';
import { NoticiasComponent } from './pages/psicologo/noticias/noticias.component';




export const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'institucional/historia', component: InstitucionalComponent},
    { path: 'institucional/historia', component: HistoriaComponent},
    { path: 'institucional/autoridades', component: AutoridadesComponent  },
    { path: 'institucional/legislacion', component: LegislacionComponent },
    { path: 'profesionales/buscar', component: ProfesionalesComponent },
    
    { path: 'secretaria', component: SecretariaComponent,
    children: [
        { path: 'general',outlet:'sec', component: GeneralComponent },
        { path: 'accionsocial',outlet:'sec', component: AccionsocialComponent },
        { path: 'asuntosprof',outlet:'sec', component: AsuntosprofComponent },
        { path: 'cientifica',outlet:'sec', component: CientificaComponent },
    ]
    },
    
   
    { path: 'psicologo/login', component: LoginComponent},
    { path: 'psicologo/cursos', component: CursosPsicologoComponent},
    { path: 'psicologo/liquidacion', component: LiquidacionComponent},
    { path: 'psicologo/noticias', component: NoticiasComponent},
    { path: 'psicologo/principal', component: PrincipalComponent},
    { path: 'autorizaciones', component: AutorizacionesComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'gestion', component: GestionComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

