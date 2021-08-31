import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../reservations/interfaces/interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(book: Book): string {
    return `assets/heroes/${book.title}.jpg`;
  }

}
