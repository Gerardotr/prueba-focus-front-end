import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebafocus';

  userRole= 'Nda'
  isLogin: boolean;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {


    if(localStorage.getItem('token')) {
      this.authService.isLogin.next(true);
    }
    
   
  }

  logout() {
    this.authService.isLogin.next(false);
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/auth']);

  }
}
