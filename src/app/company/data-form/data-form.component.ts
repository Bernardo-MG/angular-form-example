import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowLeftLong, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Company } from '../model/company';

@Component({
  selector: 'company-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent {

  @Input() data: Company = new Company();

  @Output() return = new EventEmitter<void>();

  public backIcon = faArrowLeftLong;
  public editIcon = faPenToSquare;

  constructor() { }

  public goBack() {
    this.return.emit();
  }

}
