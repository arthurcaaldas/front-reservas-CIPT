import { Component, ViewChild } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';

import { UsersFormComponent } from '../form/form.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'oxe-users-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class UsersListComponent {
  public users: Array<any> = [];
  public displayedColumns: string[] = ['fullName', 'email', 'createdAt', 'updatedAt', '_id'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _api: ApiService,
    public dialog: MatDialog) {}
  
  ngOnInit() {
    this.handleUsers();
  }
  
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
      next: (users) => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => console.error(error),
    })
  }
}
