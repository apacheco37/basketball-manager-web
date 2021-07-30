import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player.interface';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players$!: Observable<Player[]>;
  displayedColumns: string[] = ['Id', 'Last Name', 'First Name', 'Age', 'Skill', 'Talent'];

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.players$ = this.playerService.getPlayers();
  }

}
