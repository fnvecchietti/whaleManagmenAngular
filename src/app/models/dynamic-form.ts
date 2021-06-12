export interface FormStructure {
    type: 'input' | 'select';
    label: string;
    options?: Array<FormOptions>;
    formControlName: string;
}

export interface FormOptions {
    value: string | number;
    name: string
}