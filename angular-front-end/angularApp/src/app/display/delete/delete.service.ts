import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  constructor(private http : HttpClient) { }

  getdata(id,field){
    return this.http.post<any>('http://localhost:3000/delete',{
      id:id,
      field:field
    });
  }
}
