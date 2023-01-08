import { Router, RouterModule } from '@angular/router';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private ds:DataService,private router:Router) { }
  signupform=this.formbuilder.group({mail:['',[Validators.required,Validators.pattern('[a-z0-9\@.]+')]],psd:['',[Validators.required,Validators.pattern('[a-z0-9]+')]]})

  ngOnInit(): void {

  }

  signup(){
var mail=this.signupform.value.mail
var psd=this.signupform.value.psd

if(this.signupform.valid){
  const result=this.ds.signup(mail,psd)
  if(result){
    alert('successfully signed')
    this.router.navigateByUrl('new')

  }
  else{
    alert('user already exist')
    this.router.navigateByUrl('new')

  }
}

else{
  alert('invalid form')
}
  }
}


