import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../books/interfaces/interfaces';
import { BookService } from '../books/services/book.service';
import { Reservatione } from './interfaces/interfaces';
import { ReservationsService } from '../services/reservations.service';
import { ConfirmReturnedComponent } from '../confirm-returned/confirm-returned.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservatione[];

  dialogRef : MatDialogRef<ConfirmReturnedComponent>
  
  public selectedIndex;
  displayedColumns: string[] = ['book', 'user', 'state', 'options'];
  dataSource = new MatTableDataSource([]); 
  @ViewChild(MatSort,  { static: false }) sort: MatSort;
 
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
 
  constructor(
    private reservationsService: ReservationsService,
    public dialog: MatDialog
  ) { }
 
  ngOnInit() {

    if(localStorage.getItem('roles') == 'librarian'){
      console.log('librarian');
      this.reservationsService.getReservationsAll()
      .subscribe(res => {
        this.reservations = res.reservationes;
        console.log(this.reservations);
        this.dataSource = new MatTableDataSource(this.reservations);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    }else {
      console.log('student');
      this.reservationsService.getReservations()
      .subscribe(res => {
        this.reservations = res.reservationes;
        console.log(this.reservations);
        this.dataSource = new MatTableDataSource(this.reservations);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })

    }
   
  }
 
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
 
  back() {

  }
  generateList() {}

  openDialog(reser): void {
    this.dialogRef = this.dialog.open(ConfirmReturnedComponent, {
      data: {
        reservation: reser
      }
      
    });
 }
}
