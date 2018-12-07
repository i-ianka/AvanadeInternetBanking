import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pontoVirgula'
})
export class PontoVirgulaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('.', ',')
  }

}
