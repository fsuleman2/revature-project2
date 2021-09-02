import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

categories=[
  {
    cid:23,
    title:'programing'
  },
]

quizData={
  title:'',
  description:'',
  maxMarks:'',
  numberOfQuestions:'',
  active:true,
  category:{
    cid:'',
  },

};

  constructor(private _cat:CategoryService,private _snack:MatSnackBar,private _quizService:QuizService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>{
        //categores load
        this.categories=data;
        console.log(data);
      },
      (error:any)=>{
        console.log(error);
        Swal.fire('Error !',"Error Loading data",'error');
      }
    );
  }
addQuiz(){
// console.log(this.quizData)
if(this.quizData.title.trim()=='' || this.quizData.title==null){
  this._snack.open("Title Required !!",'',{duration:3000});
  return;
}

if(this.quizData.description.trim() == '' || this.quizData.description==null){
  this._snack.open("Description Required !!",'',{duration:3000});
  return;
}
if(this.quizData.title.trim()=='' || this.quizData.title==null){
  this._snack.open("Title Required !!",'',{duration:3000});
  return;
}
if(this.quizData.maxMarks=='' || this.quizData.maxMarks==null){
  this._snack.open("Maximum Marks Required !!",'',{duration:3000});
  return;
}
if(this.quizData.numberOfQuestions.trim()=='' || this.quizData.numberOfQuestions==null){
  this._snack.open("Number of Question Required !!",'',{duration:3000});
  return;
}

//sending data to server
this._quizService.addQuiz(this.quizData).subscribe(
  (data:any)=>{
    Swal.fire('Success','quiz is added','success');
    //clearing
    this.quizData={
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active:true,
      category:{
        cid:'',
      },
    
    };

  },
  (error:any)=>{
    console.log(error)
    Swal.fire('Error !!','Error in loading data','error');
  }
)//subscribe
}



}
