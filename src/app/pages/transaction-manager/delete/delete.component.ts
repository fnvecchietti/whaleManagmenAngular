import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TransactionResponse } from 'src/app/models/transactions';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { TransactionManagerService } from '../services/transaction-manager.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @ViewChild('table') table!: MatTable<any>
  userTransactions!: Array<TransactionResponse>
  constructor(private tManagerService: TransactionManagerService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadUserTransactions()
  }

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(this.userTransactions);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.table.renderRows()
  }

  delete(transaction: TransactionResponse) {
    if (!transaction.transactionId) return
    this.loadingService.on()
    this.tManagerService.deleteUserTransaction(transaction).subscribe(res => {
      console.log(res);
      this.loadUserTransactions()
      this.loadingService.off()
    },
      err => {
        console.log(err);
        this.loadUserTransactions()
        this.loadingService.off()
      })
  }

  loadUserTransactions() {
    this.tManagerService.getUserTransactions().subscribe(res => {
      if (res.rows.length > 0) {
        this.userTransactions = res.rows
        this.displayedColumns = Object.keys(this.userTransactions[0])
        this.displayedColumns.push('actions')
        this.dataSource = new MatTableDataSource(this.userTransactions);
        this.table.renderRows()
      }
    })
  }
}
