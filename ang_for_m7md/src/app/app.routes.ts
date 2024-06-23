import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TraineeManagementComponent } from './trainee-management/trainee-management.component'
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [ 
    {path : 'login', component: LoginPageComponent},
    {path : '',redirectTo:'login' ,pathMatch :'full'},
    {path : 'traineeManagement', component: TraineeManagementComponent},
    {path : '**' , component: NotFoundComponent}
];
