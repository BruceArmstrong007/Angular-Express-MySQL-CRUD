import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { DisplayComponent } from './display/display.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './display/edit/edit.component';
import { Err404Component } from './err404/err404.component';

import { DisplayService } from './display/display.service';
import { CreateService } from './create/create.service';
import { EditService } from './display/edit/edit.service';
import { DeleteService } from './display/delete/delete.service';
import { DeleteComponent } from './display/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CreateComponent,
    EditComponent,
    Err404Component,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [DisplayService,CreateService,EditService,DeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
