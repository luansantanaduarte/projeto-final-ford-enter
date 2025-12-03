import { Component } from '@angular/core';
import { HeaderAutenticadoComponent } from "../../elements/header-autenticado/header-autenticado.component";
import { SidebarNavComponent } from '../../elements/sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-index',
  imports: [HeaderAutenticadoComponent, SidebarNavComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
