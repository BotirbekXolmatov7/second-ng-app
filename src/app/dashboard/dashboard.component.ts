import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['24.01', '24.01', '24.01', '24.01', '24.01', '24.01', '24.01', '24.01',],
        datasets: [
          {
            label: "HR",
            data: ['10000000', '40000000', '20000000', '20000000', '10000000',
              '2000000', '-10000000', '0'],
            backgroundColor: 'rgba( 116,162,235, 0.5)',
            fill: true,
            borderColor: 'rgba( 116,162,235, 255)',
            tension: 0.5
          },
          {
            label: "USD",
            data: ['30000000', '60000000', '40000000', '40000000', '80000000',
              '40000000', '20000000', '60000000'],
            backgroundColor: 'rgba( 226,187,251, 0.5)',
            fill: true,
            borderColor: 'rgba( 226,187,251, 255)',
            tension: 0.5
          },
          {
            label: "UZS",
            data: ['40000000', '20000000', '60000000', '70000000', '30000000',
              '50000000', '40000000', '80000000'],
            backgroundColor: 'rgba( 138,233,217, 0.5)',
            borderColor: 'rgba( 138,233,217, 255)',
            fill: true,
            tension: 0.5,
          },
        ]
      },
      options: {
        aspectRatio: 5.0,
        
      }

    });
  }

  ngOnInit(): void {
    this.createChart();
  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }
}
