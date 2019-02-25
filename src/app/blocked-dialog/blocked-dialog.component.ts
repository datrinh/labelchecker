import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-blocked-dialog',
  templateUrl: './blocked-dialog.component.html',
  styleUrls: ['./blocked-dialog.component.scss']
})
export class BlockedDialogComponent implements OnInit {
  message;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.message = this.data.message;
  }
}
