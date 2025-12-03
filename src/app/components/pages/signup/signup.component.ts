import { Component } from '@angular/core';
import { FooterComponent } from '../../elements/footer/footer.component';
import { HeaderHomeComponent } from "../../elements/header-home/header-home.component";

@Component({
  selector: 'app-signup',
  imports: [FooterComponent, HeaderHomeComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {}
