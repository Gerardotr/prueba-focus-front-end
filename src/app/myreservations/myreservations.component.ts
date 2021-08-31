import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reservatione } from '../reservations/interfaces/interfaces';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css']
})
export class MyreservationsComponent implements OnInit {

  reservations: Reservatione[];
  
  public selectedIndex;
  displayedColumns: string[] = ['book', 'user', 'state'];
  dataSource = new MatTableDataSource([]); 
  @ViewChild(MatSort,  { static: false }) sort: MatSort;
 
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
 
  constructor(
    private reservationsService: ReservationsService,
  ) { }
 
  ngOnInit() {

    if(localStorage.getItem('roles') == 'librarian'){
      console.log('librarian');
      this.reservationsService.getReservations()
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
}
