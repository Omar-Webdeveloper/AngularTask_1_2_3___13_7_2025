import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //price = 50;

  //ngOnInit
  //message: string = ''; // Default value for the message

  //constructor() {
  //  console.log('Constructor: Component created');
  //}

  //ngOnInit(): void {
  //  console.log('ngOnInit: Initialization logic here');
  //  // Initialization logic (e.g., setting default values, fetching data)
  //  this.message = 'Hello, this message was set in ngOnInit!';
  //}



  public forecasts: WeatherForecast[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'angulartask_1_2_3___13_7_2025.client';
}
