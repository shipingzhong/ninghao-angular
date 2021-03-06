import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './modules/post/post.component';
import { PostDetailsComponent } from './modules/post/components/post-details/post-details.component';
import { RegisterComponent } from './modules/user/components/register/register.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


const routes: Routes = [

  {path:'posts',component:PostComponent},
  {path:'posts/:id',component:PostDetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/posts',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
