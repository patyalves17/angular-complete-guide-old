import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();

  private recipes:Recipe[]=[ 
    new Recipe(
      'teste', 
      ' dasd faacas', 
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [ new Ingredient('Meat',5),new Ingredient('French Fries',15)]),
      new Recipe(
        'teste dsda', 
        ' das sdadcas das', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
        [ new Ingredient('Buns',5),new Ingredient('pasta',15)]),
    ];

  constructor(private shoppingListService:ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }

  addRecipes(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
