import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName='jyotheeswar';
password='';
errorMessage='Invalid Credentials';
invalidLogin =false; 
constructor(private router : Router,private hardcodedAuthenticationService :HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    // if(this.userName==='jyotheeswar' && this.password==='admin123'){
    if(this.hardcodedAuthenticationService.authenticate(this.userName,this.password )){
      this.invalidLogin=false;
          this.router.navigate(['welcome',this.userName])
    }else{
      this.invalidLogin=true;
    }
    console.log(this.userName)
  }
}
