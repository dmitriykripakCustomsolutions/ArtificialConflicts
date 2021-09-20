import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public countNumeralRepresentation: string;


  public numeralRepresentation() {
    switch (this.currentCount) {
      case 0:
        this.countNumeralRepresentation = "zero";
        break;
      case 1:
        this.countNumeralRepresentation = this.currentCount + "-st";
        break;
      case 2:
        this.countNumeralRepresentation = this.currentCount + "-nd";
        break;
      case 3:
        this.countNumeralRepresentation = this.currentCount + "-rd";
        break;
      default:
        this.countNumeralRepresentation = this.currentCount + "-th";
        break;
    }
  }

  public incrementCounter() {
    this.currentCount++;
  }
}
