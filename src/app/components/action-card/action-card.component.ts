import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ActionCardComponent implements OnInit {
  @Input() isOverdue: boolean = false;

  constructor() {}

  ngOnInit() {}

  showLess = true;

  isStarOutline = true;

  toggleIcon(): void {
    this.isStarOutline = !this.isStarOutline;
    console.log('toggleIcon');
  }
}
