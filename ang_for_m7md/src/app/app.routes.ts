import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TraineeManagementComponent } from './trainee-management/trainee-management.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AddTraineeComponent } from './trainee-management/add-trainee/add-trainee.component';
import { DetailsTraineeComponent } from './trainee-management/details-trainee/details-trainee.component';
export const routes: Routes = [ 
    {path : 'login', component: LoginPageComponent},
    {path : '',redirectTo:'login' ,pathMatch :'full'},
    {path : 'traineeManagement', component: TraineeManagementComponent},
    {path : 'add-trainee', component:AddTraineeComponent },
    {path : 'details', component:DetailsTraineeComponent},
    {path : '**' , component: NotFoundComponent}
];
