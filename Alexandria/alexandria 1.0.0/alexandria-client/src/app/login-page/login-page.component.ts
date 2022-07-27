import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailInput: string = "";  
  passwordInput: string = "";
  errorAlert: boolean = false;
  errorMessage: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setTimeOutError(){
    setTimeout(() => {
      this.errorAlert = true;

      setTimeout(() => {
        this.errorAlert = false;
      }, 4000);

    }, 200);
  }

  onLoginClicked(){

    if(this.emailInput === "" && this.passwordInput === ""){
      this.setTimeOutError();
      this.errorMessage = "Email and/or Password empty....."
    } 
    else if (this.emailInput === "email@email.com" && this.passwordInput === "test") {
      console.log("worked!!!!")      
    }
    else{
      this.setTimeOutError();
      this.errorMessage = "Email and/or Password incorrect...."
    }

  }
}
