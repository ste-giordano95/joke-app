import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { LikedComponent } from './components/liked.component';
import { UnlikedComponent } from './components/unliked.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liked', component: LikedComponent },
  { path: 'unliked', component: UnlikedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
