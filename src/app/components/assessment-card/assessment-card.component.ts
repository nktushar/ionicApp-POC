import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-assessment-card',
  templateUrl: './assessment-card.component.html',
  styleUrls: ['./assessment-card.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AssessmentCardComponent implements OnInit {
  @Input() borderColor: string = 'border-green-600';
  @Input() background: string = 'bg-green-700';
  @Input() progressColor: string = 'success';

  constructor() {}
  ngOnInit() {}
}
