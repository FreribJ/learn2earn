import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LearningComponent } from './learning/learning.component';
import { FinanceComponent } from './finance/finance.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import { OverviewComponent } from './overview/overview.component';
import { NgApexchartsModule } from "ng-apexcharts";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator'
@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    FinanceComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: OverviewComponent},
      {path: 'overview', component: OverviewComponent},
      {path: 'finance', component: FinanceComponent},
      {path: 'learning', component: LearningComponent},
    ]),
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    NgApexchartsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
