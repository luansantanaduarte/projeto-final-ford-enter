import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private LocalStorageService: LocalStorageService) { }

  salvarUsuario(user: User) {
    this.LocalStorageService.salvarItem('user', user)
  }

  lerUsuario(): User | null {
    return this.LocalStorageService.lerItem<User|null>('user', null)
  }

  limparUsuario() {
    this.LocalStorageService.removerItem('user')
  }

  fazerLogin(email: string, senha: string): boolean {
    const usuario = this.lerUsuario()

    if (!usuario) {
      return false;
    }

    const verificacaoCredenciais = usuario.email === email && usuario.senha === senha;
    if (verificacaoCredenciais) {
      this.LocalStorageService.salvarItem('usuarioLogado', usuario);
      console.log('deu certo')
      return true
    }

    console.log(verificacaoCredenciais)
    console.log('deu errado')
    return false
  }

  lerUsuarioLogado(): User | null {
    const raw = localStorage.getItem('usuarioLogado');
    return raw ? (JSON.parse(raw) as User) : null;
  }
}

