import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SideMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
