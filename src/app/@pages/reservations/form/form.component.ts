import { Component, Inject, ViewChild } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import moment from 'moment';

@Component({
  selector: 'oxe-reservations-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class ReservationsFormComponent {
  public form: FormGroup;
  public rooms: Array<any> = [];
  public isEditing: boolean = false;
  public today = new Date();

  constructor(
    private _fb: FormBuilder,
    private _api: ApiService,
    private dialogRef: MatDialogRef<ReservationsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public reservation: any) {
      console.log(this._api.currentUserId)
    this.form = this._fb.group({
      userId: [this._api.currentUserId, [Validators.required]],
      fullName: [null, [Validators.required]],
      document: [null, [Validators.required]],
      roomId: [null, [Validators.required]],
      amountOfPeople: [3, [Validators.required]],
      reservationStartDate: [null, [Validators.required]],
      reservationEndDate: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    this.isEditing = !!this.reservation;
    this.handleRooms();

    if (this.isEditing) {
      this.form.patchValue({
        ...this.reservation,
        userId: this._api.currentUserId,
        roomId: this.reservation.roomId._id
      });
    }
  }

  ngAfterViewInit() {
    const endDate = this.form.get('reservationEndDate');

    this.form.get('reservationStartDate')?.valueChanges.subscribe({
      next: (value) => {
        const a = moment(value);
        const b = moment(endDate?.value);
        const diff = a.diff(b);

        if (diff > 0) 
          this.form.get('reservationEndDate')?.patchValue(value);
      }
    })
  }

  public handleRooms(): void {
    this._api.getRooms()
      .subscribe({
        next: rooms => this.rooms = rooms,
        error: error => console.error(error),
      })
  }

  public handleSubmit(): void {
    if (this.isEditing) {
      this._api.updateReservation(this.reservation._id, this.form.value)
        .subscribe({
          next: () => this.dialogRef.close(),
          error: (error) => console.error(error)
        })
      return;
    }

    this._api.createReservation(this.form.value)
      .subscribe({
        next: () => this.dialogRef.close(),
        error: (error) => console.error(error)
      });
  }
}
