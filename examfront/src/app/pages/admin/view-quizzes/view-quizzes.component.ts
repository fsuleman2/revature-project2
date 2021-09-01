import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  quizzes=[
    {
      qid:23,
      title:'Basic programming quiz',
      description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications. ',
      maxMarks:50,
      numberOfQuestions:'20',
      active:'',
      category:{
        title:'dsdd',
      },
    },
    {
      qid:23,
      title:'Basic programming quiz',
      description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications. ',
      maxMarks:50,
      numberOfQuestions:'20',
      active:'',
      category:{
        title:'dsdd',
      },
    },
  ]

  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error:any)=>{
        console.log(error);
        Swal.fire('Error !',"Error Loading data",error);
      }
    )
  }

}
