import {Component, Input, OnInit} from '@angular/core';

type TotalPanelItem = {
  content: string;
  badge?: string;
}

@Component({
  selector: 'app-total-panel',
  templateUrl: './total-panel.component.html',
  styleUrls: ['./total-panel.component.css']
})
export class TotalPanelComponent implements OnInit {

  @Input() items: TotalPanelItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
