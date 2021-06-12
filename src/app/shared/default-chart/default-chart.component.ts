import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-default-chart',
  templateUrl: './default-chart.component.html',
  styleUrls: ['./default-chart.component.scss']
})
export class DefaultChartComponent implements OnInit {
  @Input("chartOption") chartOption!: EChartsOption
  constructor() { }
  ngOnInit(): void {
    console.log(this.chartOption);

  }

}
