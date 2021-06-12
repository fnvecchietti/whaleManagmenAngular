import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormStructure } from 'src/app/models/dynamic-form';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input('data') formStructure!: Array<FormStructure>
  @Output() submit = new EventEmitter<FormGroup>();
  form!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildForm()
  }
  ngOnInit(): void {

  }

  onSubmit(form: FormGroup) {
    if (!form.valid) return
    this.submit.emit(form)
  }

  buildForm() {
    const formStructureBuild: any = {}
    this.formStructure.forEach((field: FormStructure) => {
      formStructureBuild[field.formControlName] = []
    })
    this.form = this.fb.group(formStructureBuild)
  }
}
