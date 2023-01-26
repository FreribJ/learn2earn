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
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit{
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor(private http: HttpClient, chart: FinanceComponent) {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
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
