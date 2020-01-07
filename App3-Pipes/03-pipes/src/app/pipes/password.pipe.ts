import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value:string, isVisible:boolean = false): any {
    if (isVisible || value == undefined || value == ' ') return value;

    return '*'.repeat(value.length);
  }



}
