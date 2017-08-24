import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';

@NgModule({

  declarations: [
    AppComponent,
    CardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
