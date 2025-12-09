import { Component } from '@angular/core';
import { FooterComponent } from '../../elements/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FooterComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  mensagemErro = ""
  constructor(private LoginService: LoginService, private router: Router) { }

  login(event: Event) {
    event.preventDefault();
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;
    if (!email) {
      this.mensagemErro = "Digite um email válido.";
      return;
    } else if (!senha) {
      this.mensagemErro = "Digite uma senha válida.";
      return;
    }

    const autenticacao = this.LoginService.fazerLogin(email, senha);

    if (autenticacao) {
      this.router.navigate(['/index']);
    } else {
      this.mensagemErro = "Usuário ou senha incorretos."
    }
  }
  public checagemRevendedor = false;
}
