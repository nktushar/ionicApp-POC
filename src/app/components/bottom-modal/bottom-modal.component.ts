import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom-modal',
  standalone: true,
  templateUrl: './bottom-modal.component.html',
  styleUrls: ['./bottom-modal.component.scss'],
  imports: [IonicModule],
})
export class BottomModalComponent implements OnInit {
  @Input() isMenuOpen: boolean = false;
  @Output() isMenuToggleOpen = new EventEmitter<boolean>(false);

  constructor() {}

  ngOnInit() {}

  menuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuToggleOpen.emit(this.isMenuOpen);
  }
}
