import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { startDateValidate } from '../customvalidators';

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  eventForm=new FormGroup({
    title: new FormControl('',[Validators.required,Validators.minLength(3)]),
    date: new FormControl('',[Validators.required,startDateValidate()]),
    time: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
    endtime: new FormControl('',[Validators.required]),
    description: new FormControl('')
  })

  
  get title() { return this.eventForm.controls['title']; }
  get date() { return this.eventForm.controls['date']; }
  get time() { return this.eventForm.controls['time']; }
  get endDate() { return this.eventForm.controls['endDate']; }
  get endtime() { return this.eventForm.controls['endtime']; }

}
