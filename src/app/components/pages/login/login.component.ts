import { Component } from '@angular/core';
import { FooterComponent } from '../../elements/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from "../../elements/header-home/header-home.component";

@Component({
  selector: 'app-login',
  imports: [FooterComponent, CommonModule, HeaderHomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public checagemRevendedor = false;
}
