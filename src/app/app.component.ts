import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // There are a lot of beers, 5914 if no IDs are missing, so we use the 'slice' pipe to 
  // limit the number of results. In a production scenario, I would use a datatable with built-in
  // pagination and search features, such as the excellent ag-grid ("https://www.ag-grid.com")
  // or ng2-table ("https://valor-software.com/ng2-table/") which I have used in production before.
  // Since this is an exercise, I wanted to build the features myself without using a 3rd party datatable.
  public beers;
  public breweries;

  constructor(private http: HttpClient, private tableService: TableService){

  }

  ngOnInit() {
    this.tableService.getBeers().subscribe(data => {
      this.beers = data;
      console.log(data);
    });

    this.tableService.getBreweries().subscribe(data => {
      this.breweries = data;
      console.log(data);
    })
  }

  title = 'app';
}
