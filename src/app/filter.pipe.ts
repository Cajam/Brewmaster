import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
    
    // Got hung up and spent too much time trying to make this work. Too used to AngularJS having a search filter baked in. 
    transform(items: any[], value: string): any {
        if(!items) {
          return [];
        }
        if(!value) {
          return items;
        }
        return items.filter(item => {
            for(let value of item) {
                if(String(value).indexOf(value) !== -1) {   
                    return true;
                }
            }              
        });
    };
}