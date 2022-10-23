import { Component, OnInit } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  canDeactivate() {
    console.log('Admin Component canDeactive.');
    return window.confirm('Are you sure you want to leaver?');
  }
}
