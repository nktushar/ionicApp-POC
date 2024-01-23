import { IonicModule } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SideMenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter<void>();

  onCloseClick() {
    this.closeMenu.emit();
  }
  constructor() {}

  ngOnInit() {}
}
