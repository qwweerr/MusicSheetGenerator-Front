import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrls: ['./typelist.component.css']
})
export class TypelistComponent implements OnInit {
  typesOfInstruments: string[] = ['violin','Paion','Guitar'];
  constructor() { }

  ngOnInit(): void {
  }

}
