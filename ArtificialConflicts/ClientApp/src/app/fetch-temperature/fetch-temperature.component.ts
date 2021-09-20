import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-temperature',
  templateUrl: './fetch-temperature.component.html'
})
export class FetchTemperatureComponent {
  public temperatures: Array<string>;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Array<string>>(baseUrl + 'weatherforecast/temperature').subscribe(result => {
      this.temperatures = result;
    }, error => console.error(error));
  }
}
