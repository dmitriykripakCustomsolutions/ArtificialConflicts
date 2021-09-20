import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-additional-component',
  templateUrl: './additional.component.html'
})
export class AdditionalComponent {
  public addons: Array<string>;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Array<string>>(baseUrl + 'weatherforecast/get-addons').subscribe(result => {
      this.addons = result;
    }, error => console.error(error));
  }
}
