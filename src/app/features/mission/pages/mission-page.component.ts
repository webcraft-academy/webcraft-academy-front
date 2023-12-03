import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

export interface TicketElement {
  id: number;
  title: string;
  subtext: string;
  assignee: string;
  imgSrc: string;
  status: string;
  date: string;
}

const tickets: TicketElement[] = [
  {
    id: 1,
    title: 'Sed ut perspiciatis unde omnis iste',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    imgSrc: '/assets/images/profile/user-1.jpg',
    assignee: 'Alice',
    status: 'inprogress',
    date: '2023-05-01',
  },
  {
    id: 2,
    title: 'Xtreme theme dropdown issue',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'Jonathan',
    imgSrc: '/assets/images/profile/user-2.jpg',
    status: 'open',
    date: '2023-05-03',
  },
  {
    id: 3,
    title: 'Header issue in material admin',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'Smith',
    imgSrc: '/assets/images/profile/user-3.jpg',
    status: 'closed',
    date: '2023-05-02',
  },
  {
    id: 4,
    title: 'Sidebar issue in Nice admin',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'Vincent',
    imgSrc: '/assets/images/profile/user-4.jpg',
    status: 'inprogress',
    date: '2023-05-06',
  },
  {
    id: 5,
    title: 'Elegant Theme Side Menu show OnClick',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'Chris',
    imgSrc: '/assets/images/profile/user-5.jpg',
    status: 'open',
    date: '2023-05-04',
  },
  {
    id: 6,
    title: 'Header issue in admin pro admin',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'James',
    imgSrc: '/assets/images/profile/user-6.jpg',
    status: 'closed',
    date: '2023-05-03',
  },
  {
    id: 7,
    title: 'Elegant Theme Side Menu OnClick',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'Jonathan',
    imgSrc: '/assets/images/profile/user-7.jpg',
    status: 'inprogress',
    date: '2023-05-05',
  },
  {
    id: 8,
    title: 'adminpress Theme Side Menu not opening',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'Smith',
    imgSrc: '/assets/images/profile/user-8.jpg',
    status: 'open',
    date: '2023-05-04',
  },
  {
    id: 9,
    title: 'Charts not proper in xtreme admin',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'Markus',
    imgSrc: '/assets/images/profile/user-9.jpg',
    status: 'closed',
    date: '2023-05-02',
  },
  {
    id: 10,
    title: 'Psd not availabel with package',
    subtext:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    assignee: 'Jane',
    imgSrc: '/assets/images/profile/user-10.jpg',
    status: 'closed',
    date: '2023-05-03',
  },
];

@Component({
  selector: 'app-mission-page',
  templateUrl: './mission-page.component.html'
})
export class MissionPageComponent {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
  Object.create(null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
searchText: any;
totalCount = -1;
Closed = -1;
Inprogress = -1;
Open = -1;

displayedColumns: string[] = [
  'id',
  'title',
  'assignee',
  'status',
  'date',
  'action',
];
dataSource = new MatTableDataSource(tickets);

constructor(public dialog: MatDialog) {}

ngOnInit(): void {
  this.totalCount = this.dataSource.data.length;

  this.dataSource = new MatTableDataSource(tickets);
}

ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator;
}
}
