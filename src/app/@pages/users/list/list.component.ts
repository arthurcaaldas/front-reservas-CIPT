import { Component } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';

import { UsersFormComponent } from '../form/form.component';

@Component({
  selector: 'oxe-users-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class UsersListComponent {
  public users: Array<any> = [];
  
  constructor(
    private _api: ApiService,
    public dialog: MatDialog) {}
  
  ngOnInit() {
    this.handleUsers();
  }
  
  public openDialog(user?: any): void {
    const dialogRef = this.dialog.open(UsersFormComponent, {
      minWidth: "500px",
      data: user
    });
    
    dialogRef.afterClosed().subscribe(() => this.handleUsers());
  }
  
  public handleDelete(id: string): void {
    const isDelete = confirm("Você deseja continuar?");
    
    if (!isDelete) return;

    const token = prompt("Insira o token para deletar esse usuário");

    if (!token) {
      alert("Insira um token");
      return;
    };

    this._api.deleteUser(id)
      .subscribe({
        next: () => this.handleUsers(),
        error: (error) => console.error(error),
      })
  }
  
  public handleUsers(): void {
    this._api.getUsers()
    .subscribe({
      next: (users) => this.users = users,
      error: (error) => console.error(error),
    })
  }
}
