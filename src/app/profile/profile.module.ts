import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule],
  exports: [ProfileComponent]  // Exportez le composant si vous souhaitez l'utiliser ailleurs
})
export class ProfileModule { }