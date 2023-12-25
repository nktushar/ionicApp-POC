import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import {FullCalendarModule} from '@fullcalendar/angular';
// import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
// import dayGridPlugin from '@fullcalendar/daygrid';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FontAwesomeModule]
})
// export class DateTimePage implements OnInit {

//   currentDate: moment.Moment = moment();
//   selectedDate: moment.Moment = moment();

//   daysOfWeek: string[] = moment.weekdaysShort();

//   calendar: moment.Moment[][] = [];

//   constructor() {
//     this.generateCalendar();
//   }

//   generateCalendar(): void {
//     const startOfMonth = moment(this.currentDate).startOf('month');
//     const endOfMonth = moment(this.currentDate).endOf('month');

//     const currentMonthDays = endOfMonth.date();

//     let currentDate = moment(startOfMonth).startOf('week');

//     this.calendar = [];

//     while (currentDate.isBefore(endOfMonth)) {
//       const week: moment.Moment[] = [];
//       for (let i = 0; i < 7; i++) {
//         week.push(moment(currentDate));
//         currentDate.add(1, 'day');
//       }
//       this.calendar.push(week);
//     }
//   }

//   previousMonth(): void {
//     this.currentDate.subtract(1, 'month');
//     this.generateCalendar();
//   }

//   nextMonth(): void {
//     this.currentDate.add(1, 'month');
//     this.generateCalendar();
//   }

//   selectDate(date: moment.Moment): void {
//     this.selectedDate = date;
//     // Implement any logic you want on date selection
//   }

//   isSelected(date: moment.Moment): boolean {
//     return this.selectedDate.isSame(date, 'day');
//   }

//   ngOnInit() {
//   }

// }

export class DateTimePage implements OnInit {

  month!: string;
  year!: number;
  weeks!: any[][];
  selectedDate!: Date;

  constructor() { }

  ngOnInit(): void {
    this.month = new Date().toLocaleString('default', { month: 'long' });
    this.year = new Date().getFullYear();
    this.generateCalendar();
  }

  prevMonth(): void {
    // ... (Implementation from previous response)
    this.month = new Date(this.year, Number(this.month) - 1).toLocaleString('default', { month: 'long' });
    this.year = new Date(this.year, Number(this.month) - 1).getFullYear();
    this.generateCalendar();
  }

  nextMonth(): void {
    // ... (Implementation from previous response)
    this.month = new Date(this.year, Number(this.month) + 1).toLocaleString('default', { month: 'long' });
    this.year = new Date(this.year, Number(this.month) + 1).getFullYear();
    this.generateCalendar();
  }

  generateCalendar(): void {
    // ... (Implementation from previous response)
    const firstDayOfMonth = new Date(this.year, Number(this.month) - 1, 1);
    const lastDayOfMonth = new Date(this.year, Number(this.month), 0);
    const startingDayOfWeek = firstDayOfMonth.getDay();
  }

  getDayClass(day: any): string {
    if (day.date === new Date()) {
      return 'current-day';
    } else if (day.date === this.selectedDate) {
      return 'selected-day';
    } else {
      return '';
    }
  }

  selectDate(day: any): void {
    this.selectedDate = day.date;
    this.generateCalendar(); // Regenerate to update highlighting
    // ... (Trigger other actions as needed)
  }

  getEventColor(event: any): any {
    // ... (Implement logic to determine event color based on type)
  }

}


