import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AproposComponent } from './apropos/apropos.component';



@NgModule({
  declarations: [
    AproposComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AproposComponent]
})
export class AproposModule { }
