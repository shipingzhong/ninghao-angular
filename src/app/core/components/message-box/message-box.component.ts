import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
