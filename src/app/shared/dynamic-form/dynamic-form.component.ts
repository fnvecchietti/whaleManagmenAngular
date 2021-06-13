import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormStructure } from 'src/app/models/dynamic-form';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input('data') formStructure!: Array<FormStructure>
  @Output() dynamicSubmit = new EventEmitter();
  form!: FormGroup
  builded = false
  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  submitForm(form: FormGroup) {
    if (!form.valid) return
    const data = form.getRawValue()
    this.dynamicSubmit.emit(data)
  }

  buildForm() {
    const formStructureBuild: any = {}
    this.formStructure.forEach((field: FormStructure) => {
      formStructureBuild[field.formControlName] = []
    })
    this.form = this.fb.group(formStructureBuild)
  }
}
