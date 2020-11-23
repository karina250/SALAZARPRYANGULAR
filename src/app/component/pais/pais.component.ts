import { Component, OnInit ,Input} from '@angular/core';
import{ServiciosService}from '../../services/servicios.service'
@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  Paisese:any=[];
  @Input()estado:boolean=false;
constructor( public Pais: ServiciosService) {
  this.Pais.getPais().subscribe(data=>{
    this.Paisese=data;
    })
  }
/*Paisese:any=[];
estado:boolean=true;
  constructor( public Pais: ServiciosService) {
    this.Pais.getPais().subscribe(data=>{
      this.Paisese=data;
      //console.log(data);
    })

   }*/
   


  ngOnInit(): void {
  }

}
