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
  @Input() borderColor: string = 'border-blue-900';
  @Input() arrowBg: string = 'bg-blue-100';
  @Input() arrowColor: string = 'text-blue-800';
  // arrow: string = this.arrowBg + ' ' + this.arrowColor;
  @Input() starColor: string = 'text-blue-900';
  @Input() innerLinesColor: string = 'border-blue-100';

  constructor() {}

  ngOnInit() {}

  showLess = true;

  isStarOutline = true;

  toggleIcon() {
    this.isStarOutline = !this.isStarOutline;
  }
}
