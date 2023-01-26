import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';


interface Site {
  path: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn2Earn';
  constructor(private http: HttpClient, private router: Router) { }



  sites: Site[] = [
    {path: 'finance', name: 'Finanzen'},
    {path: 'learning', name: 'Lernen'},
  ]
  selectedSite: Site = this.sites[0];
  switchSite() {
    this.router.navigate([this.selectedSite.path]);
  }
}
