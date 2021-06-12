import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountInfo } from 'src/app/models/accounts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getUserAccountsData() {
    return this.http.get<Array<AccountInfo>>(`${environment.apiUrl}/accounts/balance`)
  }

}
