import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import {AdminComponent} from './admin/admin.component';
import {AppComponent} from './app.component';
import {AlbumlistComponent} from './albumlist/albumlist.component';


const routes: Routes = [
  {
    path: '',
    component: AlbumlistComponent
},
{
    path: 'admin',
    component: AdminComponent

},
{
    path: 'albumlist',
    component: AlbumlistComponent

},

// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
