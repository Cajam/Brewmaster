import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TableService } from './table.service';
import { FilterPipe } from './filter.pipe';
import { BreweryPipe } from './brewery.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    BreweryPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
