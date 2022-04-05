import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { faArrowLeftLong, faFloppyDisk, faMinus, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
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

  form: FormGroup;

  saved: String | null = null;

  public addIcon = faPlus;
  public backIcon = faArrowLeftLong;
  public removeIcon = faMinus;
  public saveIcon = faFloppyDisk;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      location: [this.data.location, Validators.required],
      employees: this.formBuilder.array([])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.formBuilder.group({
      location: [this.data.location, Validators.required],
      employees: this.formBuilder.array(this.data.employees.map(e => this.createEmployeeGroup(this.formBuilder, e)))
    });
    this.saved = null;
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

  public addEmployee() {
    (<FormArray> this.form.get('employees')).push(this.createEmployeeGroup(this.formBuilder, new Employee()));
  }

  public removeEmployee(index: number) {
    (<FormArray> this.form.get('employees')).removeAt(index);
  }

  get employees(): FormArray {
    return <FormArray>this.form.get('employees');
  }

  public errors(field: string): ValidationErrors | null {
    const fieldControl = this.form.controls[field];

    let errors;
    if (fieldControl) {
      errors = fieldControl.errors;
    } else {
      errors = null;
    }

    return errors;
  }

  public error(field: string, code: string): any {
    const errorList = this.errors(field);

    let errorData;
    if (errorList) {
      errorData = errorList[code];
    } else {
      errorData = null;
    }

    return errorData;
  }

  public errorsInEmployees(field: string, index: number): ValidationErrors | null {
    const fieldControl = (<FormArray> this.form.get('employees')).controls[index].get(field);

    let errors;
    if (fieldControl) {
      errors = fieldControl.errors;
    } else {
      errors = null;
    }

    return errors;
  }

  public errorInEmployees(field: string, index: number, code: string): any {
    const errorList = this.errorsInEmployees(field, index);

    let errorData;
    if (errorList) {
      errorData = errorList[code];
    } else {
      errorData = null;
    }

    return errorData;
  }

  private createEmployeeGroup(fb: FormBuilder, employee: Employee) {
    return fb.group({
      name: [employee.name, Validators.required]
    });
  }

}
