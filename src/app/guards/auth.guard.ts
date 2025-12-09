import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {

  const localstorageservice = inject(LocalStorageService);
  const router = inject(Router);

  const usuarioLogado = localstorageservice.lerItem('usuarioLogado', null)

  if (usuarioLogado) {
    return true;
  }

  return router.navigate(['/login']);
  return false
};
