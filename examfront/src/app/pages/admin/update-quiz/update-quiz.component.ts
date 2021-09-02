import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _cat:CategoryService,private _snack:MatSnackBar,private _navigatetroute:Router) { }
  qId=0;
  quiz:any;
  categories:any;
  //activated route takes data from the clicked route and give it to us
  ngOnInit(): void {
    this.qId=this._route.snapshot.params.qid;
    // alert(this.qId)
    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz=data;
        console.log(this.quiz)
      },
      (error:any)=>{
        console.log(error)
      }
    );
    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
//update form submit
public updateQuiz(){
  if(this.quiz.title.trim()=='' || this.quiz.title==null){
    this._snack.open("Title Required !!",'',{duration:3000});
    return;
  }
  
  if(this.quiz.description.trim() == '' || this.quiz.description==null){
    this._snack.open("Description Required !!",'',{duration:3000});
    return;
  }
  if(this.quiz.title.trim()=='' || this.quiz.title==null){
    this._snack.open("Title Required !!",'',{duration:3000});
    return;
  }
  if(this.quiz.maxMarks=='' || this.quiz.maxMarks==null){
    this._snack.open("Maximum Marks Required !!",'',{duration:3000});
    return;
  }
  if(this.quiz.numberOfQuestions.trim()=='' || this.quiz.numberOfQuestions==null){
    this._snack.open("Number of Question Required !!",'',{duration:3000});
    return;
  }
  //subscribe
  this._quiz.updateQuiz(this.quiz).subscribe(
    (data:any)=>{
      Swal.fire('Success',"Data updated Successfully",'success').then((e:any)=>{
        this._navigatetroute.navigate(['admin/quizzes']);
      });
    },
    (error:any)=>{
      Swal.fire('Error',"Error Loading data from Server",'error');
    }
  )
  
}
}
