import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable ()
export class TableService {

    constructor(private http:HttpClient) {}

    public getBeers(){
        return this.http.get('/assets/data/beers.json').map(data => {
            return data;
        })
    }

    public getBreweries(){
        return this.http.get('/assets/data/breweries.json').map(data => {
            return data;
        })
    }  
}