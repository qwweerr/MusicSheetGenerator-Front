import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
import { AudiouploadComponent } from './audioupload/audioupload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AudioplayerComponent,
    AudiouploadComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
