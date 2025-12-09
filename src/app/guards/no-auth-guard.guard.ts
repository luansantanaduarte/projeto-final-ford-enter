import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export const noAuthGuardGuard: CanActivateFn = (route, state) => {
  const localStorageService = inject(LocalStorageService);
  const router = inject(Router);

  const usuarioLogado = localStorageService.lerItem('usuarioLogado', null);

  if (usuarioLogado) {
    router.navigate(['/index']);
    return false;
  }

  return true;
};
