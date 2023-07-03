import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { validateTokenGuard } from './guards/validate-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected-app/protected-app.module').then(m => m.ProtectedAppModule),
    canMatch: [validateTokenGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
