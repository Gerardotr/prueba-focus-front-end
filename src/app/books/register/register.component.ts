import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedIndex;
  isLod = false;

  constructor(private router: Router,
     private snackBar: MatSnackBar, 
    private bookService: BookService,
     private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registerForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    published: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    stock: ['', [Validators.required]],


  });

  register() {
    this.isLod = true;
    const { title, author, published, genre, stock } = this.registerForm.value;
    const book = {
      title,author, published, genre, stock
    }
    if (this.registerForm.valid) {

      this.bookService.createBook(book).subscribe(valido => {

        if (valido === true) {
          this.snackBar.open('Successful record book!', '', {
            duration: 3000,
            panelClass: ['green-snackbar']
          });
          this.router.navigate(['./books/list']);
        } else {
          // TODO: mostrar mensaje de error
          this.isLod = false;
          this.snackBar.open('The book could not be registered', '', {
            duration: 1500,
            panelClass: ['green-snackbar']
          });
        }

      })
      console.table(book);



    } else {
      this.isLod = false;

      return
    }
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.registerForm.controls[control].hasError(error);
  }

}
