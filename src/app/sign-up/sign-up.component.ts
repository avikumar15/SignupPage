import { SignUpService } from './sign-up.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  title="Create an Account";
  textEntries;
  passwordEntries;
  dateEntries;
  
  signUpModel= [
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  constructor() { }

  ngOnInit(): void {
    let service = new SignUpService();
    this.textEntries = service.getTextTypeFields();
    this.passwordEntries = service.getPasswordTypeFields();
    this.dateEntries = service.getDateTypeFields();
  }

  signupClicked() {
    
    let i=0;
    for(i=0; i<this.textEntries.length; i++) {
      this.signUpModel[i]=(document.getElementById(this.textEntries[i]).value);
    }
    for(i=0; i<this.passwordEntries.length; i++) {
      this.signUpModel[this.textEntries.length+i]=(document.getElementById(this.passwordEntries[i]).value);
    }
    this.signUpModel[this.textEntries.length+this.passwordEntries.length]=(document.getElementById(this.dateEntries[0]).value);

    let isRegistrationComplete=true

    for(i=0; i<this.signUpModel.length; i++) {
      if(this.signUpModel[i]=="") {
        isRegistrationComplete=false;
        break;
      }
    }

    if(isRegistrationComplete) {
      alert("Successful!\nUsername: "+this.signUpModel[2]+"\nPassword: ******:p");
    } else {
      alert("Fill all the columns");
    }

  }

}
