import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  isLoading: true
  selectedIndex;
  hide = true
  isLod = false;
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    role: ['', [Validators.required]],
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

  register() {

    this.isLod = true;


    const {name, last_name , role ,email, password} = this.registerForm.value;

    const body = {
      name, 
      last_name, 
      email,
      roles: [role],
      password
    }

    this.authService.register(body).subscribe(valido =>  {
      console.log(valido);
      if(valido === true) {
        this.isLod = false;
        this.authService.isLogin.next(true);
        this.snackBar.open('User created, please login!','', {
          duration: 1500
        });
           this.router.navigateByUrl('/login');
      }else {
        this.isLod = false;
        // TODO: mostrar mensaje de error
         this.snackBar.open('Error to create user!', '', {
          duration: 700
         });
      }
    });

    //this.router.navigateByUrl('/dashboard');
  }

  redirec() {
    this.router.navigateByUrl('./auth/login')
  }

}
