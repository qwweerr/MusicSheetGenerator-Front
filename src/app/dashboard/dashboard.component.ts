import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  typesOfInstruments: string[] = ['Violin', 'Paino', 'Guitar'];

  @ViewChild(MatSelectionList, {static: true}) instruments: MatSelectionList;

  ngOnInit(){
      this.instruments.selectionChange.subscribe((i: MatSelectionListChange) => {          
          this.instruments.deselectAll();
          i.option.selected = true;
      });
  }
}
