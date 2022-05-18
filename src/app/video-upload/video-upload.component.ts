import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {

  constructor() { }
  formData: any = {};

  ngOnInit(): void {
  }
  alert(data:any)
  {
    this.formData=data;
    alert("video uploaded successfully")
    console.log(this.formData)
  }
}
