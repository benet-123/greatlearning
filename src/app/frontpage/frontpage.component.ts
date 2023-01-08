import { Router } from '@angular/router';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  constructor(private form:FormBuilder,private ds:DataService,private router:Router) { }
loginform=this.form.group({mail:['',[Validators.required,Validators.pattern('[a-z0-9\@.]+')]],psd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]})
  ngOnInit(): void {
  }

  login(){
    var mail=this.loginform.value.mail
    var psd=this.loginform.value.psd

    if(this.loginform.valid){
      const result=this.ds.login(mail,psd)

      if(result){
        alert('login success')
        // this.router.navigateByUrl('new')
        
      }
     
    }
    else{
        alert('Invalid form')
    }
  }

}