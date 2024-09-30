import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() incrementor: number = 1;
  count: number = 0;

  increment(): void {
    this.count += this.incrementor;
  }
}
