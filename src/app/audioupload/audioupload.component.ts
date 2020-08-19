import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audioupload',
  templateUrl: './audioupload.component.html',
  styleUrls: ['./audioupload.component.css']
})
export class AudiouploadComponent {
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  

}
