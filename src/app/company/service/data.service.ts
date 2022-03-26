import { Injectable } from '@angular/core';
import { Company } from '../model/company';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private companies: Company[] = [];

  constructor() {
    let company: Company;
    let employee: Employee;

    company = new Company();
    company.name = "Company 1";
    company.location = "Company location";

    employee = new Employee();
    employee.name = 'Employee 1';
    company.employees.push(employee);

    employee = new Employee();
    employee.name = 'Employee 2';
    company.employees.push(employee);

    this.companies.push(company);

    company = new Company();
    company.name = "Company 2";
    company.location = "Company location";

    employee = new Employee();
    employee.name = 'Employee 3';
    company.employees.push(employee);

    this.companies.push(company);
  }

  public getCompanies(): Company[] {
    return this.companies;
  }

  public deleteCompany(data: Company): Company[] {
    this.companies = this.companies.filter(company => !(company.name === data.name));

    return this.companies;
  }

  public saveCompany(data: Company) {
  }

}
