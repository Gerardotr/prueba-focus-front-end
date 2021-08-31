import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: true
  selectedIndex;
  hide = true
  isLod = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private snackBar: MatSnackBar,  private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      this.authService.isLogin.next(true);
      
    }
  }

  showPassword() {
    if(this.hide == true) {
      this.hide = true;
      return true;
    }else {

      this.hide = false;
      return false;
   
    }

  }

  login() {

    this.isLod = true;


    const {email, password} = this.loginForm.value;

    this.authService.login(email, password).subscribe(valido =>  {
      console.log(valido);
      if(valido === true) {
        this.isLod = false;
        this.authService.isLogin.next(true);
        this.snackBar.open('Welcome!','', {
          duration: 700
        });
           this.router.navigateByUrl('/books');
      }else {
        this.isLod = false;
        // TODO: mostrar mensaje de error
         this.snackBar.open('Error to login!', '', {
          duration: 700
         });
      }
    });

    //this.router.navigateByUrl('/dashboard');
  }
  redirec() {
    this.router.navigateByUrl('/auth/register')
  }

}
