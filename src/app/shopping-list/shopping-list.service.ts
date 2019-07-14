import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; 

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredentsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('tomatoes', 5),
    new Ingredient('potato', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredentsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    console.log("addIngredients to shopping" );
    this.ingredients.push(...ingredients);
    this.ingredentsChanged.next(this.ingredients.slice());
  }

}
