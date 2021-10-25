import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GetJokeService } from '../services/get-joke.service';

@Component({
  selector: 'app-home',
  template: `
    <app-card>
            <ng-container data-body>
                <h3 class="display-5 fw-bold">{{joke.setup}}</h3>
                <h3 class="display-5 fw-bold">{{joke.joke}}</h3>
            </ng-container>
            <ng-container data-footer>
                <p class="col-md-8 fs-4">{{joke.delivery}}</p>

                <button class="btn btn-outline-success m-2" (click)="getJoke.addToLiked(joke).subscribe()" >Like</button>
               <button class="btn btn-outline-danger m-2"  (click)="getJoke.addToUnliked(joke).subscribe()">Dislike</button>
                <button class="btn btn-danger m-2" (click)="stop()">Stop</button>
            </ng-container>
        </app-card>

        <ng-container *ngIf="isStop">
          <button class="btn btn-success m-2" routerLink="/liked" routerLinkActive="active">Go to See like</button>
          <button class="btn btn-danger m-2" routerLink="/unliked" routerLinkActive="active">Go to See dilike</button>
        </ng-container>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  private subscription!: Subscription;
  private interval!: any;
  public joke!: any;
  public isStop = false;

  constructor(public getJoke: GetJokeService) { }

  ngOnInit(): void {
    this.subscription = this.getJoke
      .getJoke().subscribe(data => this.joke = data);

    this.interval = setInterval(() => {
      this.subscription = this.getJoke
        .getJoke().subscribe(data => this.joke = data);
    }, 5000)
  }

  public stop() {
    clearInterval(this.interval);
    this.isStop = true;
    this.subscription.unsubscribe();
    console.log('Stop eseguito!')
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
