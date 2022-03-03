import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.modal";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test', 'https://dummyimage.com/600x400/000/fff')]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
