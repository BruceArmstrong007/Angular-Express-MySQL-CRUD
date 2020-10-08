import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(private display : DisplayService) { }

  rows:any[];

  ngOnInit(): void {
    this.display.getdata().subscribe(data=>{
      if(data.success == true){
       this.rows = data.rows;
      }else{
        window.alert(data.message);
      }
     });
  }

}


