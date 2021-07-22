import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../core/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
