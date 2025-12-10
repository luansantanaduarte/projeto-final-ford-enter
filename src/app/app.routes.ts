import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { IndexComponent } from './components/pages/index/index.component';
import { TimelineComponent } from './components/pages/timeline/timeline.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { PagProdutoComponent } from './components/pages/pag-produto/pag-produto.component';

export const routes: Routes = [
  {
    path: "", title: "Página principal",component: HomeComponent,
  },
  {
    path: "produto/:id", component: PagProdutoComponent, canActivate:[authGuard],
  },
  {
    path: "login", title: "Login" ,component: LoginComponent, canActivate: [guestGuard]
  },
  {
    path: "signup", title: "Crie sua conta" ,component: SignupComponent, canActivate: [guestGuard]
  },
  {
    path: "index", title: "Ori" ,component: IndexComponent, canActivate: [authGuard],
  },
  {
    path: "timeline", title: "Linha do tempo" ,component: TimelineComponent, canActivate: [authGuard],
  },
  {
    path: "**", redirectTo: "",
  }
];
