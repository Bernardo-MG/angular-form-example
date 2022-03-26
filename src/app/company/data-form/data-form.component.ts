import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faArrowLeftLong, faFloppyDisk, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Company } from '../model/company';
import { Employee } from '../model/employee';

@Component({
  selector: 'company-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent implements OnChanges {

  @Input() data: Company = new Company();

  @Output() return = new EventEmitter<void>();

  formData: Company = new Company();

  form: FormGroup = this.formBuilder.group({});

  public backIcon = faArrowLeftLong;
  public saveIcon = faFloppyDisk;
  public editIcon = faPenToSquare;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.formBuilder.group({
      location: [this.data.location, Validators.required],
      employees: this.formBuilder.array(this.data.employees.map(e => this.getEmployeeGroup(this.formBuilder, e)))
    });
  }

  get employees(): FormArray {
    return <FormArray>this.form.get('employees');
  }

  public goBack() {
    this.return.emit();
  }

  private getEmployeeGroup(fb: FormBuilder, employee: Employee) {
    return fb.group({
      name: [employee.name, Validators.required]
    });
  }

}
