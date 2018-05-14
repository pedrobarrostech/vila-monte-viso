import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SectionComponent } from './section.component';
import { AuthGuard } from '../common/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'areas', component: SectionComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class SectionRouting { }
