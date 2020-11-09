import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusComponent} from "./bus/bus.component";
import {HomeComponent} from "./home/home.component";
import {BusNavigationContainerComponent} from "./bus-navigation-container/bus-navigation-container.component";


const routes: Routes = [
  {component: BusNavigationContainerComponent, path: 'bus'},
  {component: HomeComponent, path: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
