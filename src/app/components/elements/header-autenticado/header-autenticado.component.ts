import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-header-autenticado',
  imports: [CommonModule],
  templateUrl: './header-autenticado.component.html',
  styleUrl: './header-autenticado.component.css',
})
export class HeaderAutenticadoComponent {
  public usuario: any = null;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.usuario = this.loginService.lerUsuarioLogado()?.usuario;
  }

  public mostrarConfigPerfil: boolean = false;
  
}
