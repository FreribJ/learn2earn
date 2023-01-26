import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn2Earn';
  constructor(private http: HttpClient) { }

  test() {
    this.http.get<string>('http://localhost:1234/listUsers').subscribe(value => console.log(value));

  }
}
