import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-design-component',
  templateUrl: './design-component.page.html',
  styleUrls: ['./design-component.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DesignComponentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // for event details box
  showLess = true;

}
