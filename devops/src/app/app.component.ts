import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
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
  password: string; 

  constructor(private http: Http){
    console.log('Hello fellow user');
  }

  
  emailVerif(){
    const req = this.http.post(this.apiUrl+'email', {
      mail: this.email
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  passwordVerif(){

  }
}
