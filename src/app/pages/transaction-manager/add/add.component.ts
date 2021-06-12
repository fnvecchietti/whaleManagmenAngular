import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { combineLatest, forkJoin } from 'rxjs';
import { Account } from 'src/app/models/accounts';
import { Currency } from 'src/app/models/currencies';
import { FormStructure } from 'src/app/models/dynamic-form';
import { Transaction } from 'src/app/models/transactions';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { TransactionManagerService } from '../services/transaction-manager.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  typeOfTranssaction!: Array<string>
  userAccounts!: Array<Account>
  currencies!: Array<Currency>
  formData: Array<FormStructure> = []

  constructor(private loadingService: LoadingService, private tManagerService: TransactionManagerService) { }

  ngOnInit(): void {

    forkJoin({
      transsactionType: this.tManagerService.getTypesOfAsset(),
      userAccounts: this.tManagerService.getUserAccounts(),
      currencies: this.tManagerService.getCurrencies()
    }).subscribe(({ transsactionType, userAccounts, currencies }) => {
      this.createFormDataStructure(transsactionType, userAccounts, currencies)

    })
  }

  createFormDataStructure(transsactionType: Array<string>, userAccounts: Array<Account>, currencies: Array<Currency>) {
    const fields = [
      {
        type: 'select',
        label: 'Transaction type',
        formControlName: 'transsactionType',
        options: transsactionType.map(t => {
          return {
            name: t,
            value: t
          }
        })
      },
      {
        type: 'select',
        label: 'Accounts',
        formControlName: 'accounts',
        options: userAccounts.map(a => {
          return {
            name: a.name,
            value: a.accountId
          }
        })
      },
      {
        type: 'select',
        label: 'Currency',
        formControlName: 'currency',
        options: currencies.map(c => {
          return {
            name: c.name,
            value: c.currencyId
          }
        })
      },
      {
        type: 'input',
        label: 'Amount',
        formControlName: 'amount',
      }, {
        type: 'input',
        label: 'Description',
        formControlName: 'description'

      }
    ]
    this.formData = fields as Array<FormStructure>
  }

  onSubmit(value: FormGroup) {
    console.log(value.getRawValue());
  }

}
