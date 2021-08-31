import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../interfaces/interfaces';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: Book[];
  
  public selectedIndex;
  displayedColumns: string[] = ['title', 'author', 'published', 'genre', 'stock'];
  dataSource = new MatTableDataSource([]); 
  @ViewChild(MatSort,  { static: false }) sort: MatSort;
 
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
 
  constructor(
    private booksService: BookService,
  ) { }
 
  ngOnInit() {
    this.booksService.getBooks()
    .subscribe(books => {
      this.books = books;
      console.log(this.books);
      this.dataSource = new MatTableDataSource(books['books']);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
 
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
 
  back() {

  }
  generateList() {}

  Filter(value) {

    var text = value.target.value;

    this.dataSource.filter = text.trim().toLowerCase();

  }
}
