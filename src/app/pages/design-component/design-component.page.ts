import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FindingCardComponent } from 'src/app/components/finding-card/finding-card.component';
import { ActionCardComponent } from 'src/app/components/action-card/action-card.component';
import { AssessmentCardComponent } from 'src/app/components/assessment-card/assessment-card.component';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

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
    SideMenuComponent,
  ],
})
export class DesignComponentPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  dataList = [
    { name: 'Item 1', otherProperty: 'Value 1' },
    { name: 'Item 2', otherProperty: 'Value 2' },
    { name: 'Item 3', otherProperty: 'Value 3' },
  ];
  selectedData: any;
  isBoxVisible = false;

  onItemClick(item: any) {
    this.selectedData = item;
    this.isBoxVisible = true;
  }

  onCloseBox() {
    this.isBoxVisible = false;
    this.selectedData = null;
  }
}
