import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'teste', 'https://cooknenjoy.com/wp-content/uploads/2022/04/estrogonofe-de-camarao-1-1200x901.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
