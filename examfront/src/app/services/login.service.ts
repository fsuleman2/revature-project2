import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }
//we will get details of the user who is currently logged in
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }
//generate token
public generateToken(loginData:any){
  return this.http.post(`${baseUrl}/generate-token`,loginData);
}

//login user: it set the token inside local storage
public loginUser(token:any){
  localStorage.setItem('token',token);
  // this.loginStatusSubject.next(true)
  return true;
}
//checking weather person is login or not
public isLoggedIn(){
  let tokenStr = localStorage.getItem('token')
  console.log(tokenStr)
  if(tokenStr==undefined || tokenStr==''|| tokenStr==null){
    return false; //person is not logged in
  }
  else{
    return true;
  }
}

//function for logout : removing token from local storage
public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

//for getting token 

public getToken(){
  return localStorage.getItem('token');
}
//also stroing user details so that
//we don't have to hit backend again n again

public setUser(user:any){
  localStorage.setItem("user",JSON.stringify(user));
}

//whatever user details we storeed we are getting it
public getUser(){
  let userStr = localStorage.getItem("user");
  if(userStr!=null){
    return JSON.parse(userStr);
  }
  else{
    this.logout();
    return null;
  }
}
//getting user role
public getUserRole(){
  let user = this.getUser();
  return user.authorities[0].authority; //taking only one role normal/admin
  //if want more retun list and take it from there
}
}
