import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/AuthGuard/authenticate.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  constructor(private router: Router, public dialogRef: MatDialogRef<LoginDialogComponent>, private authService: AuthenticateService) {}

  username: string = '';
  password: string = '';

  ngOnInit() {
  }

  login(): void {
    const isAuthenticated: boolean = this.authService.checkClientAuthentication(this.username, this.password);
    if (isAuthenticated) {
      if (this.username === 'admin') {
        this.router.navigate(['Client']);
        sessionStorage.setItem('userRole', 'Client');
      } else if (this.username === 'customer') {
        this.router.navigate(['Customer']);
        sessionStorage.setItem('userRole', 'Customer');
      }
      this.dialogRef.close();
    } else {
      alert("Invalid credentials");
    }
  }
}
