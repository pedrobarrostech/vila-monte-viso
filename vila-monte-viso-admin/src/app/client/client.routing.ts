import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { AuthGuard } from '../common/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clientes', component: ClientComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class ClientRouting { }
