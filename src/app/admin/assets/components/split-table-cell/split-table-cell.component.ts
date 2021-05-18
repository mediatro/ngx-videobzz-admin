import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-split-table-cell',
  templateUrl: './split-table-cell.component.html',
  styleUrls: ['./split-table-cell.component.css']
})
export class SplitTableCellComponent implements OnInit {

  @Input() upperText!: string;
  @Input() buttonText!: string;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
