import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  register(result:any)
  {
    console.log(result);
      
  }
  form=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(),
    repassword:new FormControl()
  })

}
