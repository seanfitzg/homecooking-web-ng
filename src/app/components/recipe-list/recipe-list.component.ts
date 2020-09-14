import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe-service.service';
import Recipe from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  display: boolean = false;

  constructor(private recipeSvc: RecipeService) {}

  ngOnInit(): void {
    this.recipeSvc.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.display = true;
    });
  }

  handleEventClicked(data): void {
    console.log(data);
  }
}
