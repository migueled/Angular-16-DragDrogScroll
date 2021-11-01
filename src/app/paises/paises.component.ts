import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  private ruta : string = `https://restcountries.com/v3.1/lang/spa`;
  paises : any = [];
  constructor( private http : HttpClient ) {

  }

  ngOnInit(): void {
    this.http.get( this.ruta )
    .subscribe( paises => this.paises = paises );
  }

  drop( evento : CdkDragDrop <any> ) {
    moveItemInArray( this.paises, evento.previousIndex, evento.currentIndex );
  }
}
