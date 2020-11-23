import { Component, OnInit } from '@angular/core';
import{ServiciosService}from '../../services/servicios.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postu:any=[];
  constructor(public postt: ServiciosService) { 
    this.postt.getPostu().subscribe(data=>{
      this.postu=data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
