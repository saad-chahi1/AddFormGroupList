import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuantiteTransfereesComponent } from './component/quantite-transferees/quantite-transferees.component';
import { RemplissageSilosComponent } from './component/remplissage-silos/remplissage-silos.component';
import { ContremaitreManutentionComponent } from './component/contremaitre-manutention/contremaitre-manutention.component';
import { ContremaitreParcCharbonComponent } from './component/contremaitre-parc-charbon/contremaitre-parc-charbon.component';


const routes: Routes = [
  { path: 'quantiteTr', component: QuantiteTransfereesComponent },
  { path: 'remplissageSilo', component: RemplissageSilosComponent },
  { path: 'contremaitreManutention', component: ContremaitreManutentionComponent },
  { path: 'contremaitreCharbon', component: ContremaitreParcCharbonComponent},
  { path: '', redirectTo: '/quantiteTr', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
