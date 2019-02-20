import { OnInit } from '@angular/core';
export declare class ChartComponent implements OnInit {
    view: any;
    showXAxis: boolean;
    showYAxis: boolean;
    gradient: boolean;
    showLegend: boolean;
    showXAxisLabel: boolean;
    xAxisLabel: string;
    showYAxisLabel: boolean;
    yAxisLabel: string;
    timeline: boolean;
    colorScheme: {
        domain: string[];
    };
    multi: any[];
    constructor();
    ngOnInit(): void;
}
