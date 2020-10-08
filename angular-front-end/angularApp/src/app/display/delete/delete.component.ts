import { Component, OnInit } from '@angular/core';
import { DeleteService } from './delete.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public parameterValue: string;

  constructor(private del : DeleteService,
    private route: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.del.getdata(data.id,data.field).subscribe(data => {
      if(data.success){
        window.alert("Successfully Deleted");
        this.router.navigate(['/']);
      }else{
        window.alert(data.message);
      }
      });
    });

  }

}
