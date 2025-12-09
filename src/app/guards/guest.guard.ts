import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const guestGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  const usuario = loginService.lerUsuarioLogado();
  if (usuario) {
    router.navigate(['/index']);
    return false
  }
  return true;
};
