import { Component } from '@angular/core';
import { FooterComponent } from '../../elements/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { v4 as uuid } from 'uuid';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FooterComponent, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  nome = "";
  sobrenome = "";
  usuario = "";
  email = "";
  dataDeNascimento = "";
  senha = "";
  confirmacaoSenha = "";
  termos: boolean = false;

  constructor(private LoginService: LoginService, private LocalStorageService: LocalStorageService) {}
  
  criarConta() {
    const newUser: User = {
      id: uuid(),
      nome: this.nome,
      sobrenome: this.sobrenome,
      usuario: this.usuario,
      email: this.email,
      dataDeNascimento: this.dataDeNascimento,
      senha: this.senha
    }
    
    this.LoginService.salvarUsuario(newUser)
  }

}
