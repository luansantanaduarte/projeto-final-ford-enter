import { Component } from '@angular/core';
import { HeaderComponent } from "../../elements/header/header.component";
import { FooterComponent } from "../../elements/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public checagemRevendedor = false;

}
