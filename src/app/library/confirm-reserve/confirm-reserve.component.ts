import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationsService } from '../../services/reservations.service';
import { Inject } from '@angular/core';
import { Book } from 'src/app/books/interfaces/interfaces';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-reserve',
  templateUrl: './confirm-reserve.component.html',
  styleUrls: ['./confirm-reserve.component.css']
})
export class ConfirmReserveComponent implements OnInit {
  book!: Book;

  constructor(private router: Router,private dialogRef: MatDialog, private reservationService: ReservationsService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.book = this.data['book']

    console.log(this.data)
  }
  reserve() { 
    const data = {
      book: this.book._id,
      state: 'reserved',
      stock: this.book.stock
    }
    this.reservationService.createReservation(data).subscribe(res => {{
      console.log(res);
      if(res == true) {

        this.router.navigate(['/library/list'])

        this.dialogRef.closeAll();

      }
     
    }})

   

  }

}


