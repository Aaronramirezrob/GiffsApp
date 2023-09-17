import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    NgModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SharedModule { }
