import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ActionCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  showLess = true;

  isStarOutline = true;

  toggleIcon() {
    this.isStarOutline = !this.isStarOutline;
  }
}
