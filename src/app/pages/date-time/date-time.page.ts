import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import {FullCalendarModule} from '@fullcalendar/angular';
// import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
// import dayGridPlugin from '@fullcalendar/daygrid';
import * as moment from 'moment';

interface Day {
  dayOfMonth: number;
  isOtherMonth: boolean;
}
@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FontAwesomeModule]
})

export class DateTimePage implements OnInit {

  currentDate: Date = new Date();
  currentMonth: string = this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dates: number[] = [];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();

    this.dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Add padding for days of previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.dates.unshift(0);
    }
  }

  isDifferentMonth(date: number): boolean {
    return date === 0;
  }

  previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateMonth();
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateMonth();
  }

  updateMonth(): void {
    this.currentMonth = this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    this.generateCalendar();
  }

}


