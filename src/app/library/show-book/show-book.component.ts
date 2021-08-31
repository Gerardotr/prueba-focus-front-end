import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Book } from '../../reservations/interfaces/interfaces';
import { BookService } from '../../books/services/book.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmReserveComponent } from '../confirm-reserve/confirm-reserve.component';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
  dialogRef : MatDialogRef<ConfirmReserveComponent>

  book!: Book;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.bookService.getBookPorId(id))
    ).
    subscribe(book => {
      console.log(book);
      this.book = book['book'] 
    });
  }

  regresar() {
    this.router.navigate(['/library/list']);
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(ConfirmReserveComponent, {
      data: {
        book: this.book
      }
      
    });
 }
 
 closeDialog(){
    alert("test");
    this.dialogRef.close();
 }

}
