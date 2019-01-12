import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-repices',
  templateUrl: './repices.component.html',
  styleUrls: ['./repices.component.css']
})
export class RepicesComponent implements OnInit {
  selected:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
