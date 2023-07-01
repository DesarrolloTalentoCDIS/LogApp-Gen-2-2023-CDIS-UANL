import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, CanActivate , RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router){ }

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validateToken();
    .pipe(
      tap(valid => {
        if(!valid){
          this.router.navigateByUrl('/auth')
        }
      } )
    )
  }

  canLoad(){

  }


  
}
