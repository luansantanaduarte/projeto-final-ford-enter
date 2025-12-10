import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-autenticado',
  imports: [CommonModule, FormsModule],
  templateUrl: './header-autenticado.component.html',
  styleUrl: './header-autenticado.component.css',
})
export class HeaderAutenticadoComponent {
  public usuario: any = null;
  public mudancaIcone = true;
  public pesquisa = ""
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.usuario = this.loginService.lerUsuarioLogado()?.usuario;
  }

  mudarIcone(): void {
    this.mudancaIcone = !this.mudancaIcone;
  }

  onBlur(): void {
    if (!this.mudancaIcone) {
      this.mudancaIcone = true;
    }
  }

  limparPesquisa(input: HTMLInputElement): void {
    this.pesquisa = "";
    input.focus();
  }

  public mostrarConfigPerfil: boolean = false;

}
