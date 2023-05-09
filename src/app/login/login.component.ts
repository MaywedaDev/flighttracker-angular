import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  invalid = false

  constructor(private router: Router){}
  login(){
    if(this.email != '' && this.password !=''){
			this.router.navigate(['/flights'])
		}
		else{this.invalid = true}
  }
}
