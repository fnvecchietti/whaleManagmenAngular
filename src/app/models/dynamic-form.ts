import { Validators } from "@angular/forms";

export interface FormStructure {
    type: 'input' | 'select';
    label: string;
    options?: Array<FormOptions>;
    formControlName: string;
    validations?: Array<Validators>
}

export interface FormOptions {
    value: string | number;
    name: string
}