import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { DataService } from '../service/data.service';

@Component({
  selector: 'company-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.sass']
})
export class CompanyViewComponent implements OnInit {

  selection: Company | null = null;

  companies: Company[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.companies = this.dataService.getCompanies();
  }

  public selectData(data: Company) {
    this.selection = data;
  }

  public deselectData() {
    this.selection = null;
  }

  public deleteData(data: Company) {
    this.companies = this.dataService.deleteCompany(data);
  }

}
