import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'bulk-load',
    loadChildren: () => import('./bulk-load/bulk-load.module').then( m => m.BulkLoadPageModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then( m => m.SellerPageModule)
  },
  {
    path: 'hour/:codigo',
    loadChildren: () => import('./hour/hour.module').then( m => m.HourPageModule)
  },
  {
    path: 'rutero-dia/:dia',
    loadChildren: () => import('./rutero-dia/rutero-dia.module').then( m => m.RuteroDiaPageModule)
  },
  {
    path: 'rutero',
    loadChildren: () => import('./rutero/rutero.module').then( m => m.RuteroPageModule)
  },  {
    path: 'busqueda-rutero',
    loadChildren: () => import('./busqueda-rutero/busqueda-rutero.module').then( m => m.BusquedaRuteroPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
