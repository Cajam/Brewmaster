import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brewFilter'
})

export class BreweryPipe implements PipeTransform {
    
    transform(breweries: any, ids: any) {
        if (!breweries || !ids) {
            return breweries;
        }
        console.log(breweries, ids);
    }
}