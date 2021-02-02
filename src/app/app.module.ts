import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Newpost1Component } from './newpost1/newpost1.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    NewpostComponent,
    Newpost1Component,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
