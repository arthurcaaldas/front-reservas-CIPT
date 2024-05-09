import { Component, ViewChild } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';

import { RoomsFormComponent } from '../form/form.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'oxe-rooms-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class RoomsListComponent {
  public rooms: Array<any> = [];
  public displayedColumns: string[] = ['name', 'number', '_id'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _api: ApiService,
    public dialog: MatDialog) {}
  
  ngOnInit() {
    this.handleRooms();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  public openDialog(room?: any): void {
    const dialogRef = this.dialog.open(RoomsFormComponent, {
      minWidth: "500px",
      data: room
    });
    
    dialogRef.afterClosed().subscribe(() => this.handleRooms());
  }
  
  public handleDelete(id: string): void {
    const isDelete = confirm("Você deseja continuar?");
    
    if (!isDelete) return;

    this._api.deleteRoom(id)
      .subscribe({
        next: () => this.handleRooms(),
        error: (error) => console.error(error),
      })
  }
  
  public handleRooms(): void {
    this._api.getRooms()
    .subscribe({
      next: (rooms) => {
        this.rooms = rooms;
        this.dataSource = new MatTableDataSource(this.rooms);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => console.error(error),
    })
  }
}
