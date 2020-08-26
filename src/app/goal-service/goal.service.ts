import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(): import("../goal").Goal[] {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}