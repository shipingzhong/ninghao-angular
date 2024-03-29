import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { MyListComponent } from './components/my-list/my-list.component';



@NgModule({
  declarations: [
    RegisterComponent,
    MyListComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule, UserRoutingModule
  ]
})
export class UserModule { }
