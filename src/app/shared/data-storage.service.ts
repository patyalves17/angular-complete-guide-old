import { RecipeService } from './../repices/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../repices/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeData() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put('https://ng-recipe-book-f6fa4.firebaseio.com/recipes.json', recipes)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  fetchData() {
    return this.http
      .get<Recipe[]>('https://ng-recipe-book-f6fa4.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(data => {
          this.recipeService.setRecipes(data);
        })
      );
  }
}
