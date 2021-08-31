import { Component, OnInit } from '@angular/core';
import { Book } from '../../reservations/interfaces/interfaces';
import { BookService } from '../../books/services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BookService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books => {
      console.log(books);
      this.books = books['books'];
    });
  }
}
