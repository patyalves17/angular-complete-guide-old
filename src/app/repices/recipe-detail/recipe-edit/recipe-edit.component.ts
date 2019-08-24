import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    const recipe = this.recipeService.getRecipe(this.id);
    let recipeName = '';
    let recipeDescription = '';
    let recipePath = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipePath = recipe.imagePath;
      if (recipe['ingredients']) {
        recipe.ingredients.forEach(item => {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(item.name),
              amount: new FormControl(item.amount)
            })
          );
        });
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      description: new FormControl(recipeDescription),
      imagePath: new FormControl(recipePath),
      ingredients: recipeIngredients
    });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
