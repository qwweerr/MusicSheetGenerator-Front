import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange, MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  typesOfInstruments: string[] = ['Violin', 'Paino', 'Guitar'];

  @ViewChild(MatSelectionList) instruments: MatSelectionList;

  ngOnInit(){
      this.instruments.selectionChange.subscribe((i: MatSelectionListChange) => {          
          this.instruments.deselectAll();
          i.option.selected = true;
      });
  }
}
