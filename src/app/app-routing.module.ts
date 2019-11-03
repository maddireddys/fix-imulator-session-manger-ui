import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSessionComponent } from './list-session/list-session.component';

const routes: Routes = [
	
    { path: 'list-session', component: ListSessionComponent },
    {path : '', component : ListSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
