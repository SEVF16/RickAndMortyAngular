import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlValueNumber'
})
export class UrlValueNumberPipe implements PipeTransform {

  transform(value: string): string {
    // Extraer los últimos valores numéricos sin el "/"
    const parts = value.split('/');
    const lastPart = parts[parts.length - 1];

    // Utilizar un "pipe" (|) como separador
    return lastPart.replace('/', '|');
  }

}
