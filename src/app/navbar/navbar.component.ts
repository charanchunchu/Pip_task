import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userRole: any

  constructor(public dialog: MatDialog) {}



  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(LoginDialogComponent, dialogConfig);
  }
}
