import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library/library.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookCardComponent } from './book-card/book-card.component';
import { IndexComponent } from './index/index.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { ConfirmReserveComponent } from './confirm-reserve/confirm-reserve.component';


@NgModule({
  declarations: [
    LibraryComponent,
    BookCardComponent,
    IndexComponent,
    ShowBookComponent,
    ConfirmReserveComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
