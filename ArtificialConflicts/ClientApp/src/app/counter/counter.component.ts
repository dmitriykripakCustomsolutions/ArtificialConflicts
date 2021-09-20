import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public salted: string;

  public incrementCounter() {
    this.currentCount++;
  }

  public addSalt() {
    const salt = Math.floor(Math.random() * 1000).toString();

    this.salted = salt + this.currentCount + salt;
  }
}
