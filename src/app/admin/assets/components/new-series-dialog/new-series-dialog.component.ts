import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-series-dialog',
  templateUrl: './new-series-dialog.component.html',
  styleUrls: ['./new-series-dialog.component.css']
})
export class NewSeriesDialogComponent implements OnInit {

  control = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

  }

  handleNoClick(): void {
    this.dialogRef.close();
  }

}
