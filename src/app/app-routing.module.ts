import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';
import { DemoModule } from './modules/demo/demo.module';
import { SelectivePreloadingStrategyService } from './core/services/selective-preloading-strategy.service';

const routes: Routes = [
  // { path: 'posts', component: PostComponent },
  // { path: 'posts/:id', component: PostDetailsComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: 'demo',
    loadChildren: () =>
      import('./modules/demo/demo.module').then((module) => module.DemoModule),
    data: {
      preload: true,
    },
  },
  { path: '**', component: PageNotFoundComponent },
  {
    path: 'message',
    component: MessageBoxComponent,
    outlet: 'popup',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
