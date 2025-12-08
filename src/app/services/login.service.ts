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
}

