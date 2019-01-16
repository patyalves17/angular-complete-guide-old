import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredentsChanged = new EventEmitter<Ingredient[]>();
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
    this.ingredentsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    console.log("addIngredients to shopping" );
    this.ingredients.push(...ingredients);
    this.ingredentsChanged.emit(this.ingredients.slice());
  }

}
