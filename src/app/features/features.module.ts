import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerModule } from './player/player.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerModule,
    HomeComponent
  ]
})
export class FeaturesModule { }
