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
  @Input() isOverdue: boolean = false;

  constructor() {}

  ngOnInit() {}
}
