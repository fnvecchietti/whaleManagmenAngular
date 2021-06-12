import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Account } from 'src/app/models/accounts';
import { Currency } from 'src/app/models/currencies';
import { Transaction, TransactionResponse, UserTransactions } from 'src/app/models/transactions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionManagerService {

  constructor(private http: HttpClient) { }

  getTypesOfAsset() {
    return of(['debit', 'credit'])
  }

  getUserAccounts() {
    return this.http.get<Array<Account>>(`${environment.apiUrl}/accounts/all`)
  }

  getCurrencies() {
    return this.http.get<Array<Currency>>(`${environment.apiUrl}/currencies/all`)
  }

  add(transaction: Transaction) {
    if (transaction.type === 'credit') {
      return this.http.post(`${environment.apiUrl}/transaction/credit`, transaction)
    } else if (transaction.type === 'debit') {
      return this.http.post(`${environment.apiUrl}/transaction/debit`, transaction)
    } else {
      return of({ error: 'transaction type not recognized' })
    }
  }

  getUserTransactions() {
    return this.http.get<UserTransactions>(`${environment.apiUrl}/transaction/all`)
  }

  deleteUserTransaction(transaction: TransactionResponse) {
    return this.http.delete<UserTransactions>(`${environment.apiUrl}/transaction/delete/${transaction.transactionId}`)
  }
}
