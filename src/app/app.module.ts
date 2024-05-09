import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DialogModule} from "@syncfusion/ej2-angular-popups";
import {FormsModule} from "@angular/forms";
import {MaskedTextBoxModule, NumericTextBoxModule, TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import {DropDownListModule, MultiSelectModule} from '@syncfusion/ej2-angular-dropdowns';
import { AppBarModule} from "@syncfusion/ej2-angular-navigations";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {EditService, GridModule, PagerModule, PageService, ToolbarService} from "@syncfusion/ej2-angular-grids";
import { HistoryGridComponent } from './components/history-grid/history-grid.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import {CalculatorService} from "./services/calculator-service.service";
import {ButtonModule} from "@syncfusion/ej2-angular-buttons";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HistoryGridComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    DialogModule,
    FormsModule,
    MaskedTextBoxModule,
    MultiSelectModule,
    NumericTextBoxModule,
    AppBarModule,
    DropDownListModule,
    HttpClientModule,
    GridModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'history', component: HistoryGridComponent},
      {path: '**', component: HomeComponent},
    ]),
    PagerModule,
    TextBoxModule,
    ButtonModule,
  ],
  providers: [CalculatorService,PageService, ToolbarService, EditService],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
