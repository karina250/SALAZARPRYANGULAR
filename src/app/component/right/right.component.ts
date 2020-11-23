import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
estado:boolean=true;
estado2:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
