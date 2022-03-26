import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-data-select',
  templateUrl: './data-select.component.html',
  styleUrls: ['./data-select.component.sass']
})
export class DataSelectComponent implements OnInit {

  data: Company[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getCompanies();
  }

}
