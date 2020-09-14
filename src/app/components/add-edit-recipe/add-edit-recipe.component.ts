import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe-service.service';
import Recipe from '../../models/recipe';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.css'],
})
export class AddEditRecipeComponent implements OnInit {
  recipeId: number;
  recipe: Recipe;
  constructor(
    private currentRoute: ActivatedRoute,
    private recipeSvc: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeId = this.currentRoute.snapshot.params.id as number;
    this.recipeSvc.getRecipesById(this.recipeId).subscribe((recipe) => {
      console.log('recipe', recipe);
      this.recipe = recipe;
    });
    console.log('recipeId', this.recipeId);
  }

  saveRecipe(): void {
    console.log('save');
    //this.router.navigate()
  }
}
