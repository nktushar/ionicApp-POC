import { IonicModule } from '@ionic/angular';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom-modal',
  standalone: true,
  templateUrl: './bottom-modal.component.html',
  styleUrls: ['./bottom-modal.component.scss'],
  imports: [IonicModule],
})
export class BottomModalComponent implements OnInit {
  @Input() isMenuOpen: boolean = false;
  @Output() isMenuOpenChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  menuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpenChange.emit(this.isMenuOpen);
  }
}
