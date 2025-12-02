import { Component } from '@angular/core';
import { HeaderComponent } from "../../elements/header/header.component";
import { FooterComponent } from "../../elements/footer/footer.component";

@Component({
  selector: 'app-signup',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
