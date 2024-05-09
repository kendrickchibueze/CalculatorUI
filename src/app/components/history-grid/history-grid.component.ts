import {Component, OnInit, ViewChild} from '@angular/core';
import {CalculatorService} from "../../services/calculator-service.service";
import {GridComponent, PageSettingsModel} from "@syncfusion/ej2-angular-grids";
import {TextBoxComponent} from "@syncfusion/ej2-angular-inputs";
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';


@Component({
  selector: 'app-history-grid',
  templateUrl: './history-grid.component.html',
  styleUrls: ['./history-grid.component.scss']
})
export class HistoryGridComponent implements OnInit {
  public taxHistoryData: any[] = [];
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('textbox') public textbox?: TextBoxComponent;
  @ViewChild('button') public button?: ButtonComponent;

  public pageSettings: PageSettingsModel = { pageSize: 7 };
  public totalRecordsCount: number = 0;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.loadTaxHistoryData();
  }

  loadTaxHistoryData(): void {
    this.calculatorService.getTaxHistory().subscribe(
      (data: any[]) => {
        console.log('Tax history data:', data);
        this.taxHistoryData = data.map(item => ({
          TimeStamp: item.timestamp,
          'Postal Code': item.postalCode,
          Income: item.income,
          Tax: item.tax,
          Calculator: item.calculator
        }));
        this.totalRecordsCount = this.taxHistoryData.length;
      },
      (error) => {
        console.error('Error fetching tax history:', error);
      }
    );
  }

  updatePageSize(): void {
    const pageSize = parseInt((this.textbox as TextBoxComponent).value, 10);
    if (!isNaN(pageSize) && pageSize > 0) {
      this.pageSettings.pageSize = pageSize;
      if (this.grid && this.grid.pageSettings) {
        this.grid.pageSettings.pageSize = pageSize;
        this.grid.refresh();
      }
    } else {
      alert('Please enter a valid page size.');
    }
  }



}
