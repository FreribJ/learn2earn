import { Component } from '@angular/core';
interface Budget {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  //user: {name: string} = {name: 'Peter'}
  budgets: Budget[] = [
      {value: 'essen', viewValue: 'Essen'},
      {value: 'auto', viewValue: 'Auto'},
      {value: 'freizeit', viewValue: 'Freizeit'},
      {value: 'wohnen' , viewValue: 'Wohnen'},

    ];
}
