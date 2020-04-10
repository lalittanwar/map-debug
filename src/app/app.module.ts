import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OutputGraphComponent } from './output-graph/output-graph.component';
import { Routes, RouterModule } from '@angular/router';
import { HighchartsChartModule } from "highcharts-angular";

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    OutputGraphComponent
    
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
