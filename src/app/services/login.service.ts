import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private LocalStorageService: LocalStorageService) { }

  salvarUsuario(user: User) {
    this.LocalStorageService.salvarItem('user', user)
  }
  
  lerUsuario(): User | null {
    return this.LocalStorageService.lerItem<User | null>('user', null)
  }
  
  limparUsuario() {
    this.LocalStorageService.removerItem('user')
  }
  
  fazerLogin(email: string, senha: string): LoginResponse {
    if (!senha || !email) {
      return { sucesso: false, mensagem: "Preencha todos os campos." }
    }

    const usuario = this.lerUsuario()
    
    if (!usuario) {
      return { sucesso: false, mensagem: "Nenhum usuário cadastrado encontrado." };
    }


    if (usuario.senha !== senha && usuario.email !== email) {
      return { sucesso: false, mensagem: "Email ou senha incorretos." }
    }


    this.LocalStorageService.salvarItem('usuarioLogado', usuario);
    return { sucesso: true, mensagem: "Login realizado com sucesso!" };

  }
  lerUsuarioLogado(): User | null {
    const raw = localStorage.getItem('usuarioLogado');
    return raw ? (JSON.parse(raw) as User) : null;
  }

  logout() {
    localStorage.removeItem('usuarioLogado')
  }
}

