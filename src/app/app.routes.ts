import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BotonesComponent } from './pages/botones/botones.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BlankComponent } from './pages/blank/blank.component';
import { FormsComponent } from './pages/forms/forms.component';
import { CardsComponent } from './pages/cards/cards.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconComponent } from './pages/icon/icon.component';
import { MessageComponent } from './pages/message/message.component';
import { MainDashboardComponent } from './shared/main-dashboard/main-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'botones',
        component: BotonesComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: 'blank',
        component: BlankComponent,
      },
      {
        path: 'forms',
        component: FormsComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
      {
        path: 'typography',
        component: TypographyComponent,
      },
      {
        path: 'pagesIcon',
        component: IconComponent,
      },
      {
        path: 'message',
        component: MessageComponent,
      },
    ],
  },
];
