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
  row : String[];
  date : Date;
  constructor(private route: ActivatedRoute,private router : Router,private edit : EditService) { }

  ngOnInit(): void {
    let d: Date = new Date();
    d.setFullYear(d.getFullYear() - 18);
    this.date = d;
    this.route.params.subscribe(data => {
        this.id = data.id;
        this.edit.getData(this.id).subscribe(data => {
         this.row = data.row[0];
        });

   });
  }

  postData(form : NgForm){
       this.edit.setData(form).subscribe(data => {
        window.alert(data.message);
            if(data.success){
              window.alert("Successfully Updated");
              this.router.navigate(['/']);
            }
       });
  }

}
