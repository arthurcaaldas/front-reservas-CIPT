import { Component } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';

import { RoomsFormComponent } from '../form/form.component';

@Component({
  selector: 'oxe-rooms-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class RoomsListComponent {
  public rooms: Array<any> = [];
  
  constructor(
    private _api: ApiService,
    public dialog: MatDialog) {}
  
  ngOnInit() {
    this.handleRooms();
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
      next: (rooms) => this.rooms = rooms,
      error: (error) => console.error(error),
    })
  }

  // public completed(id: string): void {
  //   const isDelete = confirm("Você deseja continuar?");
    
  //   if (!isDelete) return;

  //   this._api.deleteReservation(id)
  //     .subscribe({
  //       next: () => this.completed(),
  //       error: (error) => console.error(error),
  //     })
  // }
}
