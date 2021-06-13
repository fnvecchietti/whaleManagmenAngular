import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
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

  constructor(private loadingService: LoadingService, private transactionManagerService: TransactionManagerService) { }

  ngOnInit(): void {
    forkJoin({
      transsactionType: this.transactionManagerService.getTypesOfAsset(),
      userAccounts: this.transactionManagerService.getUserAccounts(),
      currencies: this.transactionManagerService.getCurrencies()
    }).subscribe(({ transsactionType, userAccounts, currencies }) => {
      this.createFormDataStructure(transsactionType, userAccounts, currencies)
    })
  }

  createFormDataStructure(transsactionType: Array<string>, userAccounts: Array<Account>, currencies: Array<Currency>) {
    const fields: Array<FormStructure> = [
      {
        type: 'select',
        label: 'Transaction type',
        formControlName: 'transsactionType',
        validations: ["", Validators.required],
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
        validations: ["", Validators.required],
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
        validations: ["", Validators.required],
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
        validations: ["", Validators.required],
        formControlName: 'amount',
      }, {
        type: 'input',
        label: 'Description',
        validations: ["", Validators.required],
        formControlName: 'description'

      }
    ]
    this.formData = fields
  }

  onSubmit(data: any) {
    this.loadingService.on()
    const transaction: Transaction = {
      type: data.transsactionType,
      amount: data.amount,
      account_ref: data.accounts,
      currency_ref: data.currency,
      description: data.description
    }
    this.transactionManagerService.createTransaction(transaction).subscribe(res => {
      this.loadingService.off()
    },
      err => {
        this.loadingService.off()
      })


  }
}
