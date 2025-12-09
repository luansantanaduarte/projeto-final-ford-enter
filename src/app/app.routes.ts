import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { IndexComponent } from './components/pages/index/index.component';
import { TimelineComponent } from './components/pages/timeline/timeline.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "login", component: LoginComponent, canActivate: [guestGuard]
  },
  {
    path: "signup", component: SignupComponent, canActivate: [guestGuard]
  },
  {
    path: "index", component: IndexComponent, canActivate: [authGuard],
  },
  {
    path: "timeline", component: TimelineComponent, canActivate: [authGuard],
  },
  {
    path: "**", redirectTo: "",
  }
];
