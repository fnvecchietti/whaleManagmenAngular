import { Component, OnInit } from '@angular/core';
import { AccountInfo } from 'src/app/models/accounts';
import { DashboardService } from '../services/dashboard.service';
import { map } from 'rxjs/operators';
import { EChartsOption } from 'echarts';
import { TransactionManagerService } from '../../transaction-manager/services/transaction-manager.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  userAccount!: Array<AccountInfo>
  constructor(private dashboardService: DashboardService, private tManagerService: TransactionManagerService) { }
  charts: Array<any> = []
  ngOnInit(): void {
    this.dashboardService.getUserAccountsData().subscribe(res => {
      this.userAccount = res
      console.log(this.userAccount);

    })
    // this.dataByDate()
  }

  // dataByDate() {
  //   this.tManagerService.getUserTransactions().subscribe(async res => {
  //     console.log(res);

  //     const mapped = await res.rows.map(transaction => {
  //       return {
  //         type: transaction.type,
  //         date: new Date(transaction.date),
  //         amount: transaction.amount
  //       }
  //     })
  //     this.createChart(mapped)
  //   })
  // }

  // createChart(mappedValues: any) {
  //   // Use factory to build charts

  //   const chartBase = {
  //     xAxis: {
  //       type: 'category',
  //       data: [],
  //     },
  //     yAxis: {
  //       type: 'value',
  //     },
  //     series: [
  //       { data: [], type: 'line' }
  //     ],
  //   };

  //   const seriesData = mappedValues.map((val: any) => {
  //     let value = val.amount.replace('$', '').replace(".", "").replace(",", ".")
  //     if (val.type == 'debit') {
  //       value = value * (-1)
  //     }
  //     return parseFloat(value)
  //   })
  //   const seriesDates = mappedValues.map((val: any) => val.date)
  //   console.log(seriesData, seriesDates);

  //   chartBase.series[0].data = seriesData
  //   chartBase.xAxis.data = seriesDates
  //   console.log(chartBase);

  //   this.charts.push(chartBase)
  // }

}
