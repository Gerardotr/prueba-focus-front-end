import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationsService } from '../services/reservations.service';
import { ReservationC } from '../reservations/interfaces/interfaces';

@Component({
  selector: 'app-confirm-returned',
  templateUrl: './confirm-returned.component.html',
  styleUrls: ['./confirm-returned.component.css']
})
export class ConfirmReturnedComponent implements OnInit {

  reser: ReservationC;

  constructor(private dialogRef: MatDialog, private reservationService: ReservationsService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.reser = this.data['reservation']

    console.log(this.data)
  }
  returned() {

    const data = {
      _id: this.reser._id,
      book: this.reser.book,
      state: this.reser.state
    }
    this.reservationService.returned(data).subscribe(res => {{
      console.log(res);
      this.dialogRef.closeAll();
    }})

  }

}
