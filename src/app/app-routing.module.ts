import { Page2Component } from './components/page2/page2.component';
import { Page1Component } from './components/page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'page1',
      component: Page1Component
    },
    {
      path: 'page2',
      component: Page2Component
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
