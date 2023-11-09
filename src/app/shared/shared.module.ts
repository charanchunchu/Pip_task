import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NgxPermissionsModule
  ]
})
export class SharedModule { }
