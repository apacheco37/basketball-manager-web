import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { MaterialModule } from 'src/app/core/material.module';


@NgModule({
  declarations: [
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialModule
  ]
})
export class PlayerModule { }
