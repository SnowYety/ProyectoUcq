import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UsuarioComponent } from './components/pages/usuario/usuario.component';
import { AlumnosComponent } from './components/pages/alumnos/alumnos.component';
import { FechaLimiteComponent } from './components/pages/fecha-limite/fecha-limite.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UsuarioComponent,
    AlumnosComponent,
    FechaLimiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
