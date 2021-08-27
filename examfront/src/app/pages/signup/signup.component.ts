import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({});  
  constructor(private userService:UserService, private _snack:MatSnackBar) {
   }
  //creating js object to store model var from  backet
public user = {
  username : '',
  password : '',
  firstName : '',
  lastName:'',
  email : '',
  phone : '',
}
  ngOnInit(): void {
  }
//function for registration binding
formSubmit(){
   console.log(this.user);
   if(this.user.username == ''|| this.user.username == null){
    //  alert("User is Required") replacing alert with snackbar
    this._snack.open("Username is Required !!",'ok',{duration:3000})
     return;
   }
   if(this.user.password == ''|| this.user.password == null){
    //  alert("User is Required") replacing alert with snackbar
    this._snack.open("password is Required !!",'ok',{duration:3000})
     return;
   }
   if(this.user.firstName == ''|| this.user.firstName == null){
    //  alert("User is Required") replacing alert with snackbar
    this._snack.open("First Name is Required !!",'ok',{duration:3000})
     return;
   }
   if(this.user.lastName == ''|| this.user.lastName == null){
    //  alert("User is Required") replacing alert with snackbar
    this._snack.open("Last Name is Required !!",'ok',{duration:3000})
     return;
   }
   if(this.user.email == ''|| this.user.email == null){
    //  alert("User is Required") replacing alert with snackbar
    this._snack.open("Email is Required !!",'ok',{duration:3000})
     return;
   }
   if(this.user.phone == ''|| this.user.phone == null){
    //  alert("User is Required") replacing alert with snackbar
    this._snack.open("Phone number is Required !!",'ok',{duration:3000})
     return;
   }
   //calling addUSer() from Services->user.service.ts
   this.userService.addUser(this.user).subscribe(
     //for success
     (data:any)=>{
       console.log(data)
       //alert("success") replacing witg sweetalert2
       Swal.fire('Success Registered !!', 'User id is '+data.id,'success')
     },
     //for error
     (error:any)=>{
       console.log(error)
      //  alert("something went wrong");
      //replacing alert with snackbar
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User Already Exist',
      })
     }
   )
}

}