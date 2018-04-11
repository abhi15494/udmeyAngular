import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 15),
    new Ingredient('Grapes', 25),
    new Ingredient('Wine', 45)
  ];
  constructor() { }

  ngOnInit() {
  }

}
