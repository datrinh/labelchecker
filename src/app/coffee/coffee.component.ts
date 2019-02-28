import { Component, OnInit } from '@angular/core';
import { GamificationService } from 'gamifilearning-lib';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  coffeeGif;
  message;
  constructor(private gf: GamificationService) {}

  ngOnInit() {
    this.coffeeGif = this.gf.getRandomGif('coffee');
    this.message = localStorage.getItem('block_message');
  }
}
