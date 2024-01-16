import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-finding-card',
  standalone: true,
  templateUrl: './finding-card.component.html',
  styleUrls: ['./finding-card.component.scss'],
  imports: [IonicModule],
})
export class FindingCardComponent implements OnInit {
  @Input() borderColor: string = 'border-orange-500';
  @Input() background: string = 'bg-orange-500';
  @Input() backgroundLight: string = 'bg-orange-100';
  @Input() innerLineColor: string = 'border-orange-100';
  @Input() inconColor: string = 'text-orange-500';

  constructor() {}

  ngOnInit() {}
}
