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

  @Output() save = new EventEmitter<Company>();

  formData: Company = new Company();

  form: FormGroup = this.formBuilder.group({});

  saved: String | null = null;

  public backIcon = faArrowLeftLong;
  public saveIcon = faFloppyDisk;
  public editIcon = faPenToSquare;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.formBuilder.group({
      location: [this.data.location, Validators.required],
      employees: this.formBuilder.array(this.data.employees.map(e => this.getEmployeeGroup(this.formBuilder, e)))
    });
    this.saved = null;
  }

  get employees(): FormArray {
    return <FormArray>this.form.get('employees');
  }

  public goBack() {
    this.return.emit();
  }

  public saveForm() {
    if (this.form.valid) {
      const company: Company = new Company();

      company.name = this.form.controls['location'].value;
      company.employees = this.form.controls['employees'].value;

      this.saved = JSON.stringify(company);

      this.save.emit(company);
    }
  }

  private getEmployeeGroup(fb: FormBuilder, employee: Employee) {
    return fb.group({
      name: [employee.name, Validators.required]
    });
  }

}
