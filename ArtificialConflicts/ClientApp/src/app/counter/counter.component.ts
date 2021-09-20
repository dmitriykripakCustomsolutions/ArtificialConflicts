import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public root: number;

  public incrementCounter() {
    this.currentCount++;
  }

  public getRoot() {
    if (this.currentCount > 0) {
      this.root = Math.sqrt(this.currentCount);
    }
  }
}
