import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
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

interface auswertung {
  typ: string,
  prozent: number,
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

  auswertungen: auswertung[] = [
    {typ: "Auto", prozent: 19.1},
    {typ: "Wohnen", prozent: -7.2},
    {typ: "Ernährung", prozent: 13.5},
    {typ: "Mobilität", prozent: 10},
    {typ: "Sparen", prozent: -13.2},
    {typ: "Freizeit", prozent: 30},]
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
