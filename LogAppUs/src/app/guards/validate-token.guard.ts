import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

const authService = inject(AuthService);
const router = inject(Router);


export const validateTokenGuard: CanActivateFn = (route, state) => {

  return authService.validateToken()
  .pipe(
    tap( valid => {
      if(!valid){
        router.navigateByUrl('/auth')
      }
    })
  );
};
