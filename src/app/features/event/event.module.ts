import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';
import { EventRoutingModule } from './event-routing.module';
import { CalendarFormDialogComponent } from './components/calendar-form-dialog/calendar-form-dialog.component';
import { EventSeinsePageComponent } from './pages/event-seinse-page/event-seinse-page.component';
import { EventGeninPageComponent } from './pages/event-genin-page/event-genin-page.component';
import { EventAdminPageComponent } from './pages/event-admin-page/event-admin-page.component';
import { EventPageComponent } from './pages/event-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarDialogComponent, FullcalendarComponent } from './components/fullcalendar/fullcalendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    CalendarFormDialogComponent,
    EventSeinsePageComponent,
    EventGeninPageComponent,
    EventAdminPageComponent,
    EventPageComponent,
    FullcalendarComponent,
    CalendarDialogComponent,
    //CalendarDatePipe
    
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    EventRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  
})
export class EventModule { }
