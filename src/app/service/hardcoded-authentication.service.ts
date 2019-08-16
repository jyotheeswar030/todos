 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(userName,password){
  //  console.log('before login..'+this.isUserLoggedIn());
    if(userName==='jyotheeswar' && password==='admin123'){
      sessionStorage.setItem('authenticateUser',userName)
      // console.log('after ...'+this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
  }
isUserLoggedIn(){
  let user =sessionStorage.getItem('authenticateUser')
 return !(user==null);
}

logout(){
  sessionStorage.removeItem('authenticateUser');
}
}
