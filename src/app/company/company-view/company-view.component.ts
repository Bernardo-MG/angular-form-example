import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';

@Component({
  selector: 'company-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.sass']
})
export class CompanyViewComponent implements OnInit {

  selection: Company | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public pickData(data: Company) {
    this.selection = data;
  }

}
