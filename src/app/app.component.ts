import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./components/counter/counter.component";
import {NgForOf} from "@angular/common";
import { AnimalsComponent } from "./components/animals/animals.component";
import { AnimalCardComponent } from "./components/animal-card/animal-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, NgForOf, AnimalsComponent, AnimalCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appName: string = 'Anidex';
  incrementors: number[] = [1,2,3];
}
