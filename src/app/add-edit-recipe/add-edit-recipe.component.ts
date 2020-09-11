import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.sass'],
})
export class AddEditRecipeComponent implements OnInit {
  recipeId: number;
  constructor(private currentRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipeId = this.currentRoute.snapshot.params.id as number;
    console.log('recipeId', this.recipeId);
  }
}
