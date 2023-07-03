import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate , CanLoad{
constructor(private authservice: AuthService,
  private router: Router){

}

  canActivate( ): Observable<boolean> | boolean {
    return this.authservice.ValidateToken().pipe(
      tap(valid =>{
        if(!valid){
          this.router.navigateByUrl('/auth')
        }
      })
    );
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authservice.ValidateToken().pipe(
      tap(valid =>{
        if(!valid){
          this.router.navigateByUrl('/auth')
        }
      })
    );
  }
  
}