import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriceComponent } from './components/matrice/matrice.component';

const routes: Routes = [
  { path: 'test', component: MatriceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
