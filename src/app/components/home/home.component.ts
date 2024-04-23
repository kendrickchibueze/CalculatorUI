import {Component, OnInit} from '@angular/core';
import {CalculatorService} from "../../services/calculator-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  postalCodes: any[] = [];
  formData = {
    postalCode: '',
    income: ''
  };

  constructor(private calculatorService:CalculatorService, private router:Router) {}

  ngOnInit(): void {
    this.getPostalCodes();
  }

  getPostalCodes() {
    this.calculatorService.getPostalCodes().subscribe(
      (response: any[]) => {
        this.postalCodes = response.map(item => item.code);
        console.log(this.postalCodes);
      },
      (error) => {
        console.error('Error fetching postal codes:', error);
      }
    );
  }

  calculateTax() {
    if (this.formData.postalCode && this.formData.income) {
      const requestData = {
        postalCode: this.formData.postalCode,
        income: this.formData.income
      };
      console.log("RequestData", requestData)
      this.calculatorService.calculateTax(requestData).subscribe(
        (response: any) => {
          console.log('Tax calculated successfully:', response);
          this.router.navigate(['/history']);
        },
        (error) => {
          console.error('Error calculating tax:', error);
        }
      );
    } else {
      console.error('Postal code and income are required.');
    }
  }

}
