import { Component, OnInit, ViewChild } from '@angular/core';
import { SrsService } from '../../services/srs.service';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-srs',
  templateUrl: './srs.component.html',
  styleUrls: ['./srs.component.scss']
})
export class SrsComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    {headerName: 'Make', field: 'make', checkboxSelection: true},
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];
  
  rowData: any;

  constructor(private srsService: SrsService) { }

  ngOnInit() {
    this.rowData = this.srsService.getSrsTable(); // we don't need to subscribe because ag-grid just use async pipe
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    console.log(`Selected nodes: ${selectedDataStringPresentation}`); // for demonstration
  }

}
