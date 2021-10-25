import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
<div class="card mb-3" (ngClass)="classes">
    <div class="card-body">
        <ng-content select="[data-body]"></ng-content>
    </div>
    <div class="card-footer">
        <ng-content select="[data-footer]"></ng-content>
    </div>
</div>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {
  @Input() classes!: string | object | string[];
  constructor() { }

  ngOnInit(): void {
  }

}
