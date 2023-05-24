import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './cadastro/tela-login/tela-login.component';
import { TelaCadastroComponent } from './cadastro/tela-cadastro/tela-cadastro.component';
import { HomeComponent } from './tela-home/home/home.component';
import { ListagemUsersModule } from './listagem-users/listagem-users.module';
import { ListagemTesteComponent } from './listagem-users/listagem-teste/listagem-teste.component';

const routes: Routes = [
  {
    path:'',
    component: TelaLoginComponent
  },
  {
    path:'login',
    component: TelaLoginComponent
  },
  {
    path:'cadastro',
    component: TelaCadastroComponent
  },
  {
    path:'editarUsuario/:id',
    component: TelaCadastroComponent
  },
  {
    path:'homePage',
    component: HomeComponent
  },
  {
    path:'listagemUsers',
    component: ListagemTesteComponent
  },
  {
    path:'editarTreino/:id',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
