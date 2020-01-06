import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalized'
})

export class CapitalizedPipe implements PipeTransform {
    // Angular earlier versions received items in an array.
    // Recent versions of angular receive arguments separated like this:
    // arg1, arg2, arg3
    // Using the spread operator ... before the args argument 
    // groups them in an array, like this:
    // ...args: any[]
    // The received arguments arg1, arg2, arg3, will be grouped in a single array.
    //transform(value: any, ...args: any[]): any {
    transform(value: any, capitalizedAll: boolean  = false): any {
        if (capitalizedAll) {
            return value.toUpperCase();
        }

        value = value.toLowerCase();
        let names = value.split(" ");
        for (let i in names){
            names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
        return names.join(" ");
    }
}