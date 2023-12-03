import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarEvent } from 'angular-calendar';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroup, FormControl } from '@angular/forms';
import { EgretCalendarEvent } from '../../models/event.model';

interface DialogData {
  event?: CalendarEvent;
  action?: string;
  date?: Date;
}

@Component({
  selector: 'app-calendar-form-dialog',
  templateUrl: './calendar-form-dialog.component.html',
  styleUrls: ['./calendar-form-dialog.component.scss']
})
export class CalendarFormDialogComponent {
  event: any;
  dialogTitle: string;
  eventForm: UntypedFormGroup;
  action: any;
  colors: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CalendarFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private formBuilder: UntypedFormBuilder,
  ) {
    this.event = data.event;
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = this.event.title;
    } else {
      this.dialogTitle = 'Add Event';
      this.event = new EgretCalendarEvent({
        start: data.date,
        end: data.date,
      });
    }
    this.colors = this.formBuilder.group({
      primary: new UntypedFormControl(),
      secondary: new UntypedFormControl(),
    });
    // console.log(data);
    this.eventForm = this.buildEventForm(this.event);
  }

  buildEventForm(event: any): FormGroup {
    if (!event) {
      event = {
        _id: null,
        title: '',
        start: null,
        end: null,
        allDay: false,
        color: { primary: '', secondary: '' },
        meta: { location: '', notes: '' },
      };
    }
  
    return this.formBuilder.group({
      _id: [event._id],
      title: [event.title],
      start: [event.start],
      end: [event.end],
      allDay: [event.allDay],
      color: this.formBuilder.group({
        primary: [event.color.primary],
        secondary: [event.color.secondary],
      }),
      meta: this.formBuilder.group({
        location: [event.meta.location],
        notes: [event.meta.notes],
      }),
      draggable: [true],
    });
  }
}
