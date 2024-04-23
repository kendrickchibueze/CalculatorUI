import {Component, OnInit} from '@angular/core';
import {CalculatorService} from "../../services/calculator-service.service";

@Component({
  selector: 'app-history-grid',
  templateUrl: './history-grid.component.html',
  styleUrls: ['./history-grid.component.scss']
})
export class HistoryGridComponent implements OnInit {
  taxHistoryData: any[] = [];

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
      },
      (error) => {
        console.error('Error fetching tax history:', error);
      }
    );
  }
}
