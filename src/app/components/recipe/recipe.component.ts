import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Recipe from '../../models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() eventClick = new EventEmitter();

  test: string = 'asdfsdfsdf';

  constructor() {}

  ngOnInit(): void {}

  // editRecipe(recipeId): void {
  //   console.log('recipeId', recipeId);
  //   this.eventClick.emit('clicked!!!');
  // }

  // deleteRecipe(): void {
  //   this.eventClick.emit('clicked!!!');
  // }
}
