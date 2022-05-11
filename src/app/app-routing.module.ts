import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/guards/auth.guard';

const routes: Routes = [
  //
  { path:'', redirectTo:'/home', pathMatch: 'full'},
  //
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  //
  { path: 'sign-in',
    loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [AuthGuard] },
  //
  { path: 'sign-up',
    loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate: [AuthGuard] },
  //
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  //
  { path: 'academic/:id', loadChildren: () => import('./pages/academic/academic.module').then(m => m.AcademicModule) },
  //
  { path: 'report/:id', loadChildren: () => import('./pages/report/report.module').then(m => m.ReportModule) },
  { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'enrolment', loadChildren: () => import('./pages/enrolment/enrolment.module').then(m => m.EnrolmentModule) },
  { path: 'description', loadChildren: () => import('./pages/description/description.module').then(m => m.DescriptionModule) },
  //
  { path:'**', redirectTo:'/home', pathMatch: 'full'},
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
