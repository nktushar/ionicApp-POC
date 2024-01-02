import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.page.html',
  styleUrls: ['./full-calendar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FullCalendarModule]
})
export class FullCalendarPage implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [
      { title: 'event 1', date: '2024-01-02' },
      { title: 'event 2', date: '2024-01-05' }
    ]
  };

  handleDateClick(arg : any) {
    alert('date click! ' + arg.dateStr)
  }

  constructor() { 
    
  }

  ngOnInit() {
    dateClick: this.handleDateClick.bind(this);
  }

}
