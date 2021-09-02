import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
qid:any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit( ): void {

    this.qid=this._route.snapshot.params.qid;
    
  }

}
