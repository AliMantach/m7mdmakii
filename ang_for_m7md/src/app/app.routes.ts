import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TraineeManagementComponent } from './trainee-management/trainee-management.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AddTraineeComponent } from './trainee-management/add-trainee/add-trainee.component';
import { AdminMangmentComponent } from './admin-Management/admin-mangment/admin-mangment.component';

export const routes: Routes = [ 
    {path : '',redirectTo:'login' ,pathMatch :'full'},
    {path : 'login', component: LoginPageComponent},
    {path : 'traineeManagement', component: TraineeManagementComponent},
    {path : 'add-trainee', component:AddTraineeComponent },
    {path : 'adminManagement', component: AdminMangmentComponent},
    {path : '**' , component: NotFoundComponent}
];
