import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EditService } from './edit.service';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id : Number;
  field : String;
  fname : String;
  name : String;
  constructor(private route: ActivatedRoute,private router : Router,private edit : EditService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
        this.id = data.id;
        this.field = data.field;
        this.fname = data.fname;
        switch(this.fname){
           case 'driverName': this.name = 'Driver Name' ;
           break;
           case 'license': this.name = 'License Number' ;
           break;
           case 'aadhar': this.name = 'Aadhar Number' ;
           break;
           case 'dob': this.name = 'Date of Birth' ;
           break;
           case 'vehicleNo': this.name = 'Vehicle Number' ;
           break;
           case 'salary': this.name = 'Salary' ;
           break;
        }
    });
  }

  postData(form : NgForm){
    form.value.rowId = this.id;
    form.value.updateField = this.fname;
       this.edit.getdata(form).subscribe(data => {
            if(data.success){
              window.alert("Successfully Updated");
            }else{
              window.alert(data.message);
            }
       });
  }

}
