import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espacoMoeda'
})
export class EspacoMoedaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('R$', 'R$ ')
  }

}
