import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private baseUrl: string = 'https://localhost:7119/api/Calculator/';

  constructor(private http:HttpClient) { }

  getTaxHistory() {
    return this.http.get<any>(this.baseUrl + "history");
  }

  getPostalCodes() {
    return this.http.get<any[]>(this.baseUrl + "postalCodes");
  }

  calculateTax(data: any) {
    return this.http.post<any>(this.baseUrl + 'calculate-tax', data);
  }
}
