import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservationsFormComponent } from '../form/form.component';

@Component({
  selector: 'oxe-reservations-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ReservationsListComponent {
  public reservations: Array<any> = [];
  
  constructor(private _api: ApiService, public dialog: MatDialog) {}
  
  ngOnInit() {
    this.handleReservations();
  }
  
  public openDialog(reservation?: any) {
    const dialogRef = this.dialog.open(ReservationsFormComponent, {
      minWidth: "500px",
      data: reservation
    });
    
    dialogRef.afterClosed().subscribe(() => this.handleReservations());
  }
  
  public handleDelete(id: string): void {
    const isDelete = confirm("Você deseja continuar?");
    
    if (!isDelete) return;

    this._api.deleteReservation(id)
      .subscribe({
        next: () => this.handleReservations(),
        error: (error) => console.error(error),
      })
  }
  
  public handleReservations(): void {
    this._api.getReservations()
    .subscribe({
      next: (reservations) => this.reservations = reservations,
      error: (error) => console.error(error),
    })
  }
}
