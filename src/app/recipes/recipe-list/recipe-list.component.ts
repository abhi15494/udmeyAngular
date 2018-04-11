import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is path', 'http://4.bp.blogspot.com/-e2dA3I8pNaE/UOtt9ju0bcI/AAAAAAAAUfM/QT-MOq9_ypk/s1600/Food+Network+logo+2003.png'),
    new Recipe('A test recipe', 'this is path', 'http://4.bp.blogspot.com/-e2dA3I8pNaE/UOtt9ju0bcI/AAAAAAAAUfM/QT-MOq9_ypk/s1600/Food+Network+logo+2003.png'),
    new Recipe('A test recipe', 'this is path', 'http://4.bp.blogspot.com/-e2dA3I8pNaE/UOtt9ju0bcI/AAAAAAAAUfM/QT-MOq9_ypk/s1600/Food+Network+logo+2003.png'),
    new Recipe('A test recipe', 'this is path', 'http://4.bp.blogspot.com/-e2dA3I8pNaE/UOtt9ju0bcI/AAAAAAAAUfM/QT-MOq9_ypk/s1600/Food+Network+logo+2003.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
