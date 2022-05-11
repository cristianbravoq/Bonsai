import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    if (!args) return value;
    return value.filter(user => user.Apellido.toUpperCase().includes(args.toUpperCase()) || user.Nombre.toUpperCase().includes(args.toUpperCase()) || user.Grado.toUpperCase().includes(args.toUpperCase()));
  }

}
