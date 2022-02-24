import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuantiteTransfereesComponent } from './component/quantite-transferees/quantite-transferees.component';


const routes: Routes = [
  { path: 'home', component: QuantiteTransfereesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
