import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-repices',
  templateUrl: './repices.component.html',
  styleUrls: ['./repices.component.css']
})
export class RepicesComponent implements OnInit {
  selectedRecipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipe=recipe;
    });
    
  }

}
