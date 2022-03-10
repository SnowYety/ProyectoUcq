import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { UsuarioComponent } from './components/pages/usuario/usuario.component';
import { AlumnosComponent } from './components/pages/alumnos/alumnos.component';
import { FechaLimiteComponent } from './components/pages/fecha-limite/fecha-limite.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'alumnos',component:AlumnosComponent},
  {path:'fechaLimite',component:FechaLimiteComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
