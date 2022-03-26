import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Company } from '../model/company';

@Component({
  selector: 'company-data-select',
  templateUrl: './data-select.component.html',
  styleUrls: ['./data-select.component.sass']
})
export class DataSelectComponent {

  @Input() data: Company[] = [];

  @Output() selected = new EventEmitter<Company>();

  @Output() delete = new EventEmitter<Company>();
  
  public deleteIcon = faTrash;

  constructor() { }

  public pickOption(company: Company) {
    this.selected.emit(company);
  }

  public deleteOption(company: Company) {
    this.delete.emit(company);
  }

}
