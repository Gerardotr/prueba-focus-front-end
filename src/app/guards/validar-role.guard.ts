import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarRoleGuard implements CanActivate, CanLoad {
  constructor (private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean  {
    console.log('Role canActivate')
    return this.authService.validarRole().pipe(
      tap(valid => {
        if(valid) {
        
          return true;
        }else {
          this.router.navigate(['/books/list'])
          return false;
        }
        
      })
    );
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('Role canLoad')
    return this.authService.validarRole().pipe(
      tap(valid => {
        if(valid) {

          return true;
        }else {
          this.router.navigate(['/books/list'])
          return false;
        }
      })
    )
  }
}
