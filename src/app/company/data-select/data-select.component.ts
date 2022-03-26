import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Company } from '../model/company';
import { DataService } from '../service/data.service';

@Component({
  selector: 'company-data-select',
  templateUrl: './data-select.component.html',
  styleUrls: ['./data-select.component.sass']
})
export class DataSelectComponent implements OnInit {

  @Output() selected = new EventEmitter<Company>();

  data: Company[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getCompanies();
  }

  public pickOption(company: Company) {
    this.selected.emit(company);
  }

}
