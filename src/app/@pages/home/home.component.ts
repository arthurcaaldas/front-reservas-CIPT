import { Component, ViewChild } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';


import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'oxe-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public reservations: Array<any> = [];
  public displayedColumns: string[] = ['roomName', 'fullName', 'document', 'amountOfPeople', 'reservationStartDate', 'reservationEndDate', '_id'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _api: ApiService,
    public dialog: MatDialog) {}
  
  ngOnInit() {
    this.handleReservations();
  }

  public openDialog(reservation?: any): void {
    const dialogRef = this.dialog.open(HomeComponent, {
      minWidth: "500px",
      data: reservation
    });
    
    dialogRef.afterClosed().subscribe(() => this.handleReservations());
  }
  
  public handleReservations(): void {
    this._api.getReservations()
    .subscribe({
      next: (reservations) => {
        this.reservations = reservations.map((item: any) => ({ roomName: item.roomId.name, ...item }));
        this.dataSource = new MatTableDataSource(this.reservations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => console.error(error),
    })
  }
}
