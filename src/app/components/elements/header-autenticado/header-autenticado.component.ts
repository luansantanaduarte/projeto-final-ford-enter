import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-autenticado',
  imports: [CommonModule],
  templateUrl: './header-autenticado.component.html',
  styleUrl: './header-autenticado.component.css',
})
export class HeaderAutenticadoComponent {
  public mostrarConfigPerfil: boolean = false;
  
}
