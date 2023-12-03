import { Pipe, PipeTransform } from '@angular/core'
import { DatePipe } from '@angular/common';

@Pipe({ name: 'calendarDate' })

export class CalendarDatePipe implements PipeTransform {
    constructor(private datePipe: DatePipe) {}
  
    transform(value: any, view: string, locale: string = 'en'): any {
      if (!value) return null;
  
      switch (view) {
        case 'dayViewTitle':
          return this.datePipe.transform(value, 'fullDate', locale);
        case 'monthViewTitle':
          return this.datePipe.transform(value, 'MMMM y', locale);
        // Add more cases as needed for different views
        default:
          return value;
      }
    }
  }

