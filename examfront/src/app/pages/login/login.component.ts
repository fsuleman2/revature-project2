import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    'username':'',
    'password':'',
  }
  constructor(private snack:MatSnackBar, private login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
formSubmit(){
  if(this.loginData.username.trim()=='' || this.loginData.username==null){
    this.snack.open("User name is Required!!",'',{duration:3000});
    return;
  }
  if(this.loginData.password.trim()=='' || this.loginData.password==null){
    this.snack.open("Password is Required!!",'',{duration:3000});
    return;
  }

//request to server to generate token
this.login.generateToken(this.loginData).subscribe(
  (data:any)=>{
    console.log('success');
    console.log(data);
    //login ...

    this.login.loginUser(data.token);
    this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.login.setUser(user);
        console.log(user);
        /*if user.getrole is admin we redirect to Admin-dashboard*/
        if(this.login.getUserRole()=='ADMIN'){
          this.router.navigate(['admin'])
          this.login.loginStatusSubject.next(true);
          // window.location.href='/admin';
        }else if(this.login.getUserRole()=='NORMAL'){
          this.router.navigate(['user-dashboard/0'])
          this.login.loginStatusSubject.next(true);
          //window.location.href='/user-dashboard'
        }
        else{
          this.login.logout();
        }

      }
    );
     




  },
  (error:any)=>{
    console.log('Error');
    console.log(error);
    this.snack.open("Invalid Details !! Try Again",'',{
      duration:3000
    })
  }
);



}//formSubmit()
}
