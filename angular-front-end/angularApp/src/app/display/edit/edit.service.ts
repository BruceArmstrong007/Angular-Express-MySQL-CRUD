import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http : HttpClient) { }

  getdata(form : NgForm){
    console.log(form.value);
    return this.http.post<any>('http://localhost:3000/update',form.value);
  }

}
