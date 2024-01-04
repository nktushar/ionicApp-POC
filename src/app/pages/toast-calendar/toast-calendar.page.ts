import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import Calendar from '@toast-ui/calendar';


@Component({
  selector: 'app-toast-calendar',
  templateUrl: './toast-calendar.page.html',
  styleUrls: ['./toast-calendar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ToastCalendarPage implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

}
