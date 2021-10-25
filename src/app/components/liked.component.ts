import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveJoke } from '../models/ISaveJoke';
import { GetJokeService } from '../services/get-joke.service';

@Component({
  selector: 'app-liked',
  template: `
  <button routerLink="/home" routerLinkActive="active">Go to Home</button>
      <ng-container *ngIf="questions | async as projects" >

      <div *ngFor="let quest of projects">
        <app-card>
            <ng-container data-body>
                <h2 class="display-5 fw-bold">{{quest.domanda}}</h2>
            </ng-container>
            <ng-container data-footer>
                <p class="col-md-8 fs-4">{{quest.risposta}}</p>

                <button class="btn btn-success">Liked</button>
            </ng-container>
        </app-card>

      </div>

      </ng-container>
  `,
  styles: [
  ]
})
export class LikedComponent implements OnInit {

  public questions!: Observable<SaveJoke[]>;
  constructor(public getJoke: GetJokeService) { }

  ngOnInit(): void {
    this.questions = this.getJoke.getLiked()

  }

}
