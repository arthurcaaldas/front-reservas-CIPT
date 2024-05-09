import { Component, Inject } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'oxe-users-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class UsersFormComponent {
  public form: FormGroup;
  public users: Array<any> = [];
  public isEditing: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _api: ApiService,
    private dialogRef: MatDialogRef<UsersFormComponent>,
    @Inject(MAT_DIALOG_DATA) public user: any) {
    this.form = this._fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phoneNumber: [null, [Validators.minLength(11), Validators.maxLength(11)]],
      password: [null, [Validators.minLength(6), Validators.maxLength(8)]],
      tokenPass: [null, [Validators.minLength(50), Validators.maxLength(50)]]
    })
  }

  ngOnInit() {
    this.isEditing = !!this.user;
    this.handleUsers();

    if (this.isEditing) {
      this.form.patchValue(this.user);
    }
  }

  public handleUsers(): void {
    this._api.getUsers()
      .subscribe({
        next: users => this.users = users,
        error: error => console.error(error),
      })
  }

  public handleSubmit(): void {
    if (this.isEditing) {
      this._api.updateUser(this.user._id, this.form.value)
        .subscribe({
          next: () => this.dialogRef.close(),
          error: (error) => console.error(error)
        })
      return;
    }

    this._api.createUser(this.form.value)
      .subscribe({
        next: () => this.dialogRef.close(),
        error: (error) => console.error(error)
      });
  }
}
