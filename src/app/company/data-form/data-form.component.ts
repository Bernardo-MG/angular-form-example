import { Component, Input, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Company } from '../model/company';

@Component({
  selector: 'company-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent implements OnInit {

  @Input() data: Company = new Company();

  editIcon = faPenToSquare;
  deleteIcon = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
