import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public currentCountFactorial: number;
  public currentCountSquare: number;

  public incrementCounter() {
    this.currentCount++;
  }

  public square() {
    this.currentCountSquare = this.currentCount * this.currentCount;
  }

  public calculateFactorial() {
    this.currentCountFactorial = this.factorial(this.currentCount);
  }

  factorial(num: number): number {
    if (num === 1) return 1;
    else if (num === 0) return 0;
    else return num * this.factorial(num - 1);
  }

}
