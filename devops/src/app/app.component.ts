import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'http://localhost:4021/validate/';
  email:string; 
  emailError: string;
  emailVerif: boolean;
  password: string; 
  passwordError: string; 
  passwordVerif: boolean;
  registered:boolean;

  constructor(private http: Http){
    console.log('Hello fellow user');
  }

  
  register(){
    this.passwordError = null;
    this.emailError = null;
    let headers = new Headers({'Content-Type':'application/json'});
    const reqEmail = this.http.post(this.apiUrl+'email', JSON.stringify({
      mail: this.email
    }), {headers:headers})
      .subscribe(
        res => {
          if(res.json() === true )
          {
            this.emailVerif = true;
            this.validRegister();
          }else{
            this.emailError = "Email not valid"
          }
        },
        err => {
          console.log("Error occured");
        }
      );

      const reqPassword = this.http.post(this.apiUrl+'password', JSON.stringify({
        password: this.password
      }), {headers:headers})
        .subscribe(
          res => {
            if(res.json() === true )
            {
              this.passwordVerif = true;
              this.validRegister();
            }else{
              this.passwordError = "Password must be at least 5 charateres long and must contains 1 uppercase"
            }
          },
          err => {
            console.log("Error occured");
          }
        );
  }
  
  validRegister(){
    if(this.passwordVerif && this.emailVerif){
        this.registered = true;
    }
  }
}
