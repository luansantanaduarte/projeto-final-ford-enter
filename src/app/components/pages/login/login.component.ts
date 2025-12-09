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

    const resultado = this.LoginService.fazerLogin(email, senha);

    if (resultado.sucesso) {
      this.router.navigate(['/index']);
    } else {
      this.mensagemErro = resultado.mensagem || "Erro ao fazer login."
    }
  }
  public checagemRevendedor = false;
}
