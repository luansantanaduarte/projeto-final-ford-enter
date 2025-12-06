import { Component } from '@angular/core';
import { HeaderAutenticadoComponent } from "../../elements/header-autenticado/header-autenticado.component";
import { SidebarNavComponent } from "../../elements/sidebar-nav/sidebar-nav.component";
import { FooterComponent } from "../../elements/footer/footer.component";

@Component({
  selector: 'app-timeline',
  imports: [HeaderAutenticadoComponent, SidebarNavComponent, FooterComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

}
