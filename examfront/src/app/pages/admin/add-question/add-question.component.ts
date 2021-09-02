import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor:any = ClassicEditor;
qId:any;
qTitle:any;
questions={
  quiz:{
    qid:''
  },
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
};
  constructor(private _route:ActivatedRoute,private _question:QuestionService) { }

  ngOnInit(): void {
    //taking out value from URL
    this.qId=this._route.snapshot.params.qid;
    this.qTitle=this._route.snapshot.params.title;
    this.questions.quiz['qid']=this.qId;
  }
formSubmit(){
  if(this.questions.content.trim()==''||this.questions.content==null){
    return;
  }
  if(this.questions.option1.trim()==''||this.questions.option1==null){
    return;
  }
  if(this.questions.option2.trim()==''||this.questions.option2==null){
    return;
  }
  if(this.questions.answer==''||this.questions.answer==null){
    return;
  }
  //form submit
  this._question.addQuestion(this.questions).subscribe(
    (data:any)=>{
      Swal.fire("Success","Question added",'success')
    },
  (error:any)=>{
    Swal.fire("Error","Error in adding Question",'error')
  }
  )
}
}
