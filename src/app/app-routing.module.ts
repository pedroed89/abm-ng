import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './abms/usuarios/usuarios.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'abm/usuarios',component:UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
