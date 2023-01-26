import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface user {
  nutzerid: number,
  name: string,
  geburtsdatum: any,
  passwort: number,
  einkommen: number,
  auto: number,
  wohnen: number,
  freizeit: number,
  essen: number,
  sparen: number,
  sonstiges: number
}
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  constructor(private http: HttpClient) {
  }

  userList: user[] = []
  loadUser() {
    this.http.get<user[]>('http://localhost:1234/listUser')
      .subscribe(value => value.forEach(u => this.userList.push(u)));

  }

}
