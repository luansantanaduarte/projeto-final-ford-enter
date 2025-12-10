import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-sidebar-nav',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.css'
})
export class SidebarNavComponent {

}
