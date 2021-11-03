import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice', 'http://www.cooktube.in/wp-content/uploads/2017/08/mutton-biryani.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
