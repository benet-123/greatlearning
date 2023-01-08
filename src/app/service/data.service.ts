import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentuser:any
currentpassword:any
currentmail:any

   userDetails:any={
    "benet@gmail.com":{email:"benet@gmail.com",password:1},
    "a@gmail.com":{email:"a@gmail.com",password:2},
    "b@gmail.com":{email:"b@gmail.com",password:3},
    "c@gmail.com":{email:"c@gmail.com",password:4}

   }
  constructor() {
    this.getData()
   }
  saveData(){
    if(this.userDetails){
      localStorage.setItem('database',JSON.stringify(this.userDetails))
    }
    if(this.currentuser){
      localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
    }
  }

  getData(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || '')
    }

    if(localStorage.getItem('currentuser')){
      this.userDetails=JSON.parse(localStorage.getItem('currentuser') || '')
    }

  }

signup(email:any,password:any){
    var userDetails=this.userDetails
    if(email in userDetails){
      return false
    }
    else{
      userDetails[email]={email,password}

      this.saveData()

      return true
    }

  }

  login(mail:any,psd:any){
    var userDetails=this.userDetails
    this.currentmail=mail
    // this.currentuser=userDetails[mail]['email']


    if(mail in userDetails){
      if(psd==userDetails[mail]['password']){
        // this.currentpassword=passwords
        this.currentmail=mail
        this.saveData()
        return true
      }
      else{
        alert('Incorrect Password')
        return false
      }
    }
    else{
      alert('Incorrect Mail id')
      return false
    }
   

  }
  
}
