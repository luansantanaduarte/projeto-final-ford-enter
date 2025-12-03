import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HeaderAutenticadoComponent } from './components/elements/header-autenticado/header-autenticado.component';
import { HeaderHomeComponent } from "./components/elements/header-home/header-home.component";

@Component({
  selector: 'app-root',
  imports: [HeaderAutenticadoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projeto-final';
}
