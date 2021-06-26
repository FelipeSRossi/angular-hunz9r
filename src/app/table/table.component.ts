import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  data: Date;
  demanda: number;
  capacidade: number;
  atendimento_planejado: number;
  atendimento_realizado: number;
  desvio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    data: new Date(),
    demanda: 1,
    capacidade: 0,
    atendimento_planejado: 2,
    atendimento_realizado: 3,
    desvio: 0
  },
  {
    data: new Date(),
    demanda: 1,
    capacidade: 0,
    atendimento_planejado: 2,
    atendimento_realizado: 3,
    desvio: 0
  },
  {
    data: new Date(),
    demanda: 1,
    capacidade: 0,
    atendimento_planejado: 2,
    atendimento_realizado: 3,
    desvio: 0
  },
  {
    data: new Date(),
    demanda: 1,
    capacidade: 0,
    atendimento_planejado: 2,
    atendimento_realizado: 3,
    desvio: 0
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'data',
    'demanda',
    'capacidade',
    'atendimento_planejado',
    'atendimento_realizado',
    'desvio'
  ];

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  constructor() {}

  ngOnInit() {}
}
