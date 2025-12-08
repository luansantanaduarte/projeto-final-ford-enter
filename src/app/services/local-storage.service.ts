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

  pegarUsuarios(): User[] {
    return this.lerItem<User[]>('usuarios', []);
  }
}
