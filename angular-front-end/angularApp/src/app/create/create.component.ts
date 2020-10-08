import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  form : NgForm;
  date : Date;

  constructor(private create : CreateService,private route : Router) {

  }

  ngOnInit(): void {
    let d: Date = new Date();
    d.setFullYear(d.getFullYear() - 18);
    this.date = d;
    this.create.syncdata().subscribe(data  => {
     if(data.success){
       console.log(data.message);
     }else{
      window.alert(data.message);
    }
    });
  }

  postData(form : NgForm){
  console.log(form.value);
    this.create.getdata(form).subscribe(data => {
      if(data.success){
        window.alert("Successfully Created");
        this.route.navigate['/'];
      }
    });
  }


}
