import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface userList {
  name
}
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  constructor(private http: HttpClient) {
  }
  test() {
    this.http.get<string>('http://localhost:1234/listUser').subscribe(value => console.log(value));

  }

}
