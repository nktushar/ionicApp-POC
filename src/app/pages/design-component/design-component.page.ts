import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FindingCardComponent } from 'src/app/components/finding-card/finding-card.component';
import { ActionCardComponent } from 'src/app/components/action-card/action-card.component';
import { AssessmentCardComponent } from 'src/app/components/assessment-card/assessment-card.component';
import { BottomModalComponent } from 'src/app/components/bottom-modal/bottom-modal.component';
import { ActionMgmtSuccessModalComponent } from 'src/app/components/action-mgmt-success-modal/action-mgmt-success-modal.component';
import { AssessmentModalComponent } from 'src/app/components/assessment-modal/assessment-modal.component';

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
    BottomModalComponent,
    ActionMgmtSuccessModalComponent,
    AssessmentModalComponent,
  ],
})
export class DesignComponentPage implements OnInit {
  isMenuOpen: boolean = false;
  isActionMgmtSuccessModalOpen: boolean = false;
  isAssessmentModalOpen: boolean = false;
  constructor() {}
  ngOnInit() {}

  assetCreationModalToggle = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };
  actionMgmtModalToggle = () => {
    this.isActionMgmtSuccessModalOpen = !this.isActionMgmtSuccessModalOpen;
  };
  assessmentModalToggle = () => {
    this.isAssessmentModalOpen = !this.isAssessmentModalOpen;
  };
}
