import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Day {
  dayOfMonth: number;
  isOtherMonth: boolean;
}

@Component({
  standalone: true,
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.page.html',
  styleUrls: ['./full-calendar.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, FontAwesomeModule],
})
export class FullCalendarPage implements OnInit {
  currentDate: Date = new Date();
  currentMonth: string = this.currentDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dates: number[] = [];
  notes: { date: number; month: number; year: number }[] = [
    { date: 5, month: 1, year: 2024 },
    { date: 7, month: 12, year: 2023 },
    { date: 15, month: 12, year: 2023 },
    // Add more notes as needed
  ];
  weeks: any[] = [];
  numCols = 7;

  hasNotes(date: number): boolean {
    const currentMonth = this.currentDate.getMonth() + 1;
    const currentYear = this.currentDate.getFullYear();

    return this.notes.some((note) => {
      return (
        note.date === date &&
        note.month === currentMonth &&
        note.year === currentYear
      );
    });
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const daysInMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0,
    ).getDate();
    const firstDayOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1,
    ).getDay();

    this.dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // if (firstDayOfMonth > 0) {
    //   const previousMonthDays = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate();
    //   for (let i = 0; i < firstDayOfMonth; i++) {
    //     this.dates.unshift(previousMonthDays - i);
    //   }
    // }
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.dates.unshift(0);
    }

    // const totalDays = this.dates.length;
    // const nextMonthDays = 7 - (totalDays % 7);
    // if (nextMonthDays < 7) {
    //   for (let i = 0; i < nextMonthDays; i++) {
    //     this.dates.push(i + 1);
    //   }
    // }
    const totalDays = this.dates.length;
    const nextMonthDays = 7 - (totalDays % 7);
    if (nextMonthDays < 7) {
      for (let i = 0; i < nextMonthDays; i++) {
        this.dates.push(0);
      }
    }

    this.calculateWeeks();
  }

  calculateWeeks(): void {
    const weeks: any[] = [];
    let currentWeek: any[] = [];

    // Assuming 'dates' is an array containing all dates to be displayed
    for (let i = 0; i < this.dates.length; i++) {
      const date = this.dates[i];

      // Assuming 'numCols' is the number of days per week (e.g., 7 for a 7-day week)
      if (i > 0 && i % this.numCols === 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push(date);
    }

    // Push the remaining days in the current week
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    this.weeks = weeks;
    console.log('Weeks:', this.weeks);
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
    this.currentMonth = this.currentDate.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
    this.generateCalendar();
  }

  isToday(date: number): boolean {
    const today = new Date();
    return (
      date === today.getDate() &&
      this.currentDate.getMonth() === today.getMonth() &&
      this.currentDate.getFullYear() === today.getFullYear()
    );
  }

  isTodayDayName(day: string): boolean {
    const today = new Date();
    return (
      day === this.days[today.getDay()] &&
      this.currentDate.getMonth() === today.getMonth() &&
      this.currentDate.getFullYear() === today.getFullYear()
    );
  }

  eventList = [
    { text: 'Item 1', date: 5 },
    { text: 'Item 2', date: 5 },
    { text: 'Item 3', date: 15 },
  ];
  selectedData: any;
  isBoxVisible = false;

  onItemClick(item: any, date: number) {
    if (item.date === date) {
      this.selectedData = item;
      this.isBoxVisible = true;
    }
  }

  onCloseBox() {
    this.isBoxVisible = false;
    this.selectedData = null;
  }

  // for event details box
  showLess = true;
}
