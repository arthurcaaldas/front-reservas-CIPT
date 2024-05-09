import { Component, Inject } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'oxe-rooms-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class RoomsFormComponent {
  public form: FormGroup;
  public rooms: Array<any> = [];
  public isEditing: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _api: ApiService,
    private dialogRef: MatDialogRef<RoomsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public room: any) {
    this.form = this._fb.group({
      name: [null, [Validators.required]],
      number: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    this.isEditing = !!this.room;
    this.handleRooms();

    if (this.isEditing) {
      this.form.patchValue(this.room);
    }
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
      this._api.updateRoom(this.room._id, this.form.value)
        .subscribe({
          next: () => this.dialogRef.close(),
          error: (error) => console.error(error)
        })
      return;
    }

    this._api.createRoom(this.form.value)
      .subscribe({
        next: () => this.dialogRef.close(),
        error: (error) => console.error(error)
      });
  }
}
