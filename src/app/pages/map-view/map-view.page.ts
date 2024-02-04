import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.page.html',
  styleUrls: ['./map-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SideMenuComponent],
})
export class MapViewPage implements OnInit {
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

  onAssetClick(id: string) {
    this.structures.forEach((structure) => {
      if (structure.assetId === id) {
        structure.child = !structure.child;
      } else {
        structure.child = false;
      }
    });
  }
}
