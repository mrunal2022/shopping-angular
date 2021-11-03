import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice', 'https://geekrobocook.com/wp-content/uploads/2021/05/Muradabadi-chicken-biryani.jpg'),
    new Recipe('Dosa', 'Dosa is a popular South Indian thin crepe made with fermented rice and lentil batter.', 'https://wallpapercave.com/wp/wp6734909.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
