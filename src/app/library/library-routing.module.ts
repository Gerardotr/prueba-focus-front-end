import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LibraryComponent } from './library/library.component';
import { ShowBookComponent } from './show-book/show-book.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'list', component: LibraryComponent },
      {
        path: ':id',
        component: ShowBookComponent
      },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
