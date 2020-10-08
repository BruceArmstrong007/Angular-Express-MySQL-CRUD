import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http : HttpClient) { }

  syncdata(){
    return this.http.get<any>('http://localhost:3000/create');
  }

  getdata(form: NgForm){
    return this.http.post<any>('http://localhost:3000/create',form.value);
  }

}
