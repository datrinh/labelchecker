import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ChartData {
  name: string;
  series: {
    name: string;
    value: number;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private f1Subject = new BehaviorSubject<ChartData[]>(null);
  f1History$ = this.f1Subject.asObservable();
  constructor() {}

  get f1History(): ChartData[] {
    console.log(this.f1Subject.getValue());
    return this.f1Subject.getValue();
  }

  set f1History(metrics) {
    console.log(metrics);
    if (metrics) {
      console.log(this.mapHistory(metrics));
      this.f1Subject.next(this.mapHistory(metrics));
    }
  }

  private mapHistory(metrics): ChartData[] {
    const series = [];
    metrics['f1_history'].forEach((element, index) => {
      series.push({ name: 'Iteration: ' + index, value: element });
    });
    return [
      {
        name: 'Score',
        series: series
      }
    ];
  }
}
