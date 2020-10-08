import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http : HttpClient) { }

  getdata(){
    return this.http.get<any>('http://localhost:3000/read');
  }

}
