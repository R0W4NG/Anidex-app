import { Component, Input} from '@angular/core';
import { Animal } from '../../dto/animal.dto';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './animal-card.component.html',
  styleUrl: './animal-card.component.scss'
})
export class AnimalCardComponent {
  @Input({required: true}) animal!: Animal;
}
