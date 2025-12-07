import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  salvarItem(chave: string, dado: any): void {
    localStorage.setItem(chave, JSON.stringify(dado))
  }

  lerItem<T>(chave: string, defaultValue: T): T {
    const item = localStorage.getItem(chave);
    if (!item) {
      return defaultValue;
    }
    return JSON.parse(item) as T
  }

  removerItem(key: string): void {
    localStorage.removeItem(key);
  }

  limpar() {
    localStorage.clear();
  }

  salvarUsuario(user: User) {
    this.salvarItem('user', user)
  }

  lerUsuario(): User | null {
    return this.lerItem<User|null>('user', null)
  }

  limparUsuario() {
    this.removerItem('user')
  }
}
