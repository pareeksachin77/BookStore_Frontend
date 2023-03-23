import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Demo1Component } from './component/demo1/demo1.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { LoginComponent } from './component/login/login.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { Quickview2Component } from './component/quickview2/quickview2.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'getallbooks',component:GetAllBooksComponent},
    {path:'quickview',component:QuickViewComponent},
    {path:'quickview2',component:Quickview2Component}
  ]
  },
  {path:'demo1',component:Demo1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
