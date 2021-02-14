import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomcomponentsComponent } from './customcomponents/customcomponents.component';
import { CardCompComponent } from './card-comp/card-comp.component';
const routes: Routes = [
  {
    path: 'button',
    component: CustomcomponentsComponent,
  },
  {
    path: 'card',
    component: CardCompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
