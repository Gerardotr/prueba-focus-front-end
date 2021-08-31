import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { BooksModule } from './books/books.module';
import { ValidarRoleGuard } from './guards/validar-role.guard';
import { ValidarLibrarianGuard } from './guards/validar-librarian.guard';
import { MyreservationsComponent } from './myreservations/myreservations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'reservations',
    component: ReservationsComponent

  },
  {
    path: 'my_reservations',
    component: MyreservationsComponent

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    canLoad: [ ValidarTokenGuard,   ],
    canActivate: [ValidarTokenGuard, ValidarLibrarianGuard]
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule),

    canActivate: [ValidarRoleGuard]
  },
  {
    path: '**',
    redirectTo: 'auth',
    

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 