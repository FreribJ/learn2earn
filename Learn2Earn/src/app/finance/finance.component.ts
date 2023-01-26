import {Component, OnInit} from '@angular/core';
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

interface betrag {
  betrag: number,
  beschreibung: string
}
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit{
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadBetraege();
  }

  userList: user[] = [];
  betraege: betrag[] = [];
  displayBetraege: string[] = ['betrag', 'beschreibung']
  loadUser() {
    this.http.get<user[]>('http://localhost:1234/listUser')
      .subscribe(value => {
        value.forEach(u => this.userList.push(u));


      });
  }

  loadBetraege() {
    this.http.get<betrag[]>('http://localhost:1234/listBetraege')
      .subscribe(value => this.betraege = value);
  }
}
