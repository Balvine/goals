import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Goal } from '../goal'
import { Quote } from '../quote-class/quote';
import { GoalService } from '../goal-service/goal.service';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[];
  alertService: AlertService;
  quote: Quote;




  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index, 1)
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }

  constructor(goalService: GoalService, alertService: AlertService, private http: HttpClient) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }


  ngOnInit() { }
}

interface ApiResponse {
  author: string;
  quote: string;
}

this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
  // Succesful API request
  this.quote = new Quote(data.author, data.quote)
})
