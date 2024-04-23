import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DialogModule} from "@syncfusion/ej2-angular-popups";
import {FormsModule} from "@angular/forms";
import {MaskedTextBoxModule, NumericTextBoxModule} from '@syncfusion/ej2-angular-inputs';
import {DropDownListModule, MultiSelectModule} from '@syncfusion/ej2-angular-dropdowns';
import { AppBarModule} from "@syncfusion/ej2-angular-navigations";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {GridModule} from "@syncfusion/ej2-angular-grids";
import { HistoryGridComponent } from './components/history-grid/history-grid.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';


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
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'history', component:  HistoryGridComponent },
      { path: '**', component: HomeComponent },
    ]),
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
