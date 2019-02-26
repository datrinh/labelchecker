import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data;

  constructor(private chart: ChartService) {}

  ngOnInit() {
    this.chart.f1History$.subscribe(res => {
      console.log(res);
      this.data = res;
    });
    console.log(this.data);
  }
}
