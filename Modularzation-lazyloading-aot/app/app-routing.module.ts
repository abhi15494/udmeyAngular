import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // Here this loadChildren take string as a input which have 
  // RelativePathOfFile/FileName.module#ClassNameOfFile
  { path: 'recipes', loadChildren: './recipes/recipies.module#RecipiesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
