import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import Recipe from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  public getRecipes() {
    return this.http.get<Recipe[]>(
      'https://homecooking.azurewebsites.net/recipes'
    );
    // return this.http.get<Recipe[]>('http://localhost:5000/recipes');
  }
  public getRecipesById(id) {
    return this.http.get<Recipe>(
      `https://homecooking.azurewebsites.net/recipes/${id}`
    );
    // return this.http.get<Recipe[]>('http://localhost:5000/recipes');
  }
}
