import { IonicModule } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SideMenuComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  isMenuOpen = false;
  activeAccordion: string = '';

  toggleVisibility(buttonId: string) {
    if (this.activeAccordion === buttonId) {
      // If the same button is clicked again, hide the div
      this.activeAccordion = '';
    } else {
      // If a different button is clicked, show its corresponding div
      this.activeAccordion = buttonId;
    }
    this.structures.forEach((structure) => {
      structure.child = false;
    });
  }

  menuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    this.structures.forEach((structure) => {
      structure.child = false;
    });
    this.activeAccordion = '';
  }

  structures = [
    {
      assetId: '1',
      child: false,
    },
    {
      assetId: '2',
      child: false,
    },
    {
      assetId: '3',
      child: false,
    },
    {
      assetId: '4',
      child: false,
    },
    {
      assetId: '5',
      child: false,
    },
    {
      assetId: '6',
      child: false,
    },
    {
      assetId: '7',
      child: false,
    },
    {
      assetId: '8',
      child: false,
    },
    {
      assetId: '9',
      child: false,
    },
  ];

  isChildOpen = false;

  onAssetClick(id: string) {
    this.structures.forEach((structure) => {
      if (structure.assetId === id) {
        structure.child = !structure.child;
        this.isChildOpen = structure.child;
        console.log(this.isChildOpen);
      } else {
        structure.child = false;
      }
    });
  }
}
