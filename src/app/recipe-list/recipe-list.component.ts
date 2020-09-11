import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-service.service';
import Recipe from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];
  constructor(public recipeSvc: RecipeService) {}

  ngOnInit(): void {
    this.recipeSvc.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
