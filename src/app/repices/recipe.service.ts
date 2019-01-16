import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();

  private recipes:Recipe[]=[ 
    new Recipe('teste', ' description', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('aasdad', ' testeeeeee', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }

}
