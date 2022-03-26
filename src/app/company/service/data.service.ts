import { Injectable } from '@angular/core';
import { Company } from '../model/company';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getCompanies(): Company[] {
    const companies: Company[] = [];
    let company: Company;
    let employee: Employee;

    company = new Company();
    company.name = "Company 1";
    company.location = "Company location";
    
    employee = new Employee();
    employee.name = 'Employee 1';
    company.employees.push(employee);

    companies.push(company);

    return companies;
  }

}
