import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-action-mgmt-success-modal',
  standalone: true,
  templateUrl: './action-mgmt-success-modal.component.html',
  styleUrls: ['./action-mgmt-success-modal.component.scss'],
  imports: [IonicModule],
})
export class ActionMgmtSuccessModalComponent implements OnInit {
  @Input() isMenuOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  menuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
