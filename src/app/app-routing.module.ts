import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './modules/post/componets/post-details/post-details.component';
import { PostComponent } from './modules/post/post.component';
import { RegisterComponent } from './modules/user/components/register/register.component';

const routes: Routes = [
  {path:'posts',component:PostComponent},
  {path:'posts/:id',component:PostDetailsComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
