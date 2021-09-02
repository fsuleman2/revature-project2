import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }
  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`);
  }

  //get quizzes of category
  public getQuizzesOfCategory(cid:any) {
    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  //qet active quizzes
  public getActiveQuizzes() {
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  //get active quizzes of category
  public getActiveQuizzesOfCategory(cid:any) {
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }

}
