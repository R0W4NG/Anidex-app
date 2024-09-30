import { Component, OnInit } from '@angular/core';
import { Animal } from '../../dto/animal.dto';
import { AnimalService } from '../../services/animal.service';
import { AnimalCardComponent } from "../animal-card/animal-card.component";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [AnimalCardComponent, NgForOf],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss'
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = [];
  loading: boolean = false;

  constructor(
    private animalService: AnimalService
  ) { }

  async ngOnInit(): Promise<void> {
    (await this.animalService.findAll()).subscribe(response => {
      this.animals = response as Animal[];
    });
  }
}
