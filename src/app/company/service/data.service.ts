import { Injectable } from '@angular/core';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getCompanies(): Company[] {
    const companies: Company[] = [];
    let company: Company;

    company = { name: 'Company 1', employees: [] };
    companies.push(company);

    return companies;
  }

}
