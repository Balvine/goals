import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import {Output} from '@angular/core'
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal(){
this.addGoal.emit(this.newGoal);
  }
  dontAdd( name:any,description:any,event:any){
    if(!name || !description){
     event.preventDefault()
    }
  }
   
  
  constructor() { }

  ngOnInit(): void {
  }

}
