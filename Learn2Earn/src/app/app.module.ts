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
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    FinanceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: FinanceComponent},
      {path: 'finance', component: FinanceComponent},
      {path: 'learning', component: LearningComponent},
      {path:  'home', component: HomeComponent}
    ]),
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
