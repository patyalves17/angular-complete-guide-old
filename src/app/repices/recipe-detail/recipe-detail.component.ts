import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe:Recipe;

  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute) { 
    }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      let id=+params['id'];
      this.recipe= this.recipeService.getRecipe(id);
    });   
  }

  addToShoppingList(){
    this.recipeService.addRecipes(this.recipe.ingredients);
  }

}
