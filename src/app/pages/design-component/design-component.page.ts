import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FindingCardComponent } from 'src/app/components/finding-card/finding-card.component';
import { ActionCardComponent } from 'src/app/components/action-card/action-card.component';
import { AssessmentCardComponent } from 'src/app/components/assessment-card/assessment-card.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-design-component',
  templateUrl: './design-component.page.html',
  styleUrls: ['./design-component.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FindingCardComponent,
    ActionCardComponent,
    AssessmentCardComponent,
  ],
})
export class DesignComponentPage implements OnInit {
  constructor() {}
  ngOnInit() {
    initFlowbite();
  }
}
