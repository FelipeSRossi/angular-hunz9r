import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  type = 'bar';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Capacidade e Atendimento Realizado",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
        }
      }
  };


  constructor() { }

  ngOnInit() {
  }

}