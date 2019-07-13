import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe:Recipe;
  editMode: boolean = false;

  constructor(private route:ActivatedRoute, 
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      const id=+params['id'];
      // this.recipe= this.recipeService.getRecipe(id);
      this.editMode=params['id'] !=null;
    });

  }

}
