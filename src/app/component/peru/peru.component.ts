import { Component, OnInit,Input } from '@angular/core';
import{ServiciosService}from '../../services/servicios.service';
@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css']
})

export class PeruComponent implements OnInit {
  peru:any=[];
@Input() estado:boolean=false;
constructor(public peruV: ServiciosService) { 
  this.peruV.getPeru().subscribe(data=>{
    this.peru=data;
      //console.log(data);
    })
/*peru:any=[];
estado:boolean=true;
  constructor(public peruV: ServiciosService) { 
    this.peruV.getPeru().subscribe(data=>{
      this.peru=data;
      
    })*/
  }


  ngOnInit(): void {
  }
  

}
