import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public currentCountSquare: number;

  public incrementCounter() {
    this.currentCount++;
  }

  public square() {
    this.currentCountSquare = this.currentCount * this.currentCount;
  }
}
