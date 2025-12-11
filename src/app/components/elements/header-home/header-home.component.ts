import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-header-home',
  imports: [RouterLink],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {
  scrollTo(sectionId: string) {
    const alvo =  document.getElementById(sectionId);

    if (alvo) {
      alvo.scrollIntoView({behavior: 'smooth'})
    }
  }
}
