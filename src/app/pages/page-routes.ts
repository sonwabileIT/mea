import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EnrollComponent } from "./enroll/enroll.component";
import { MyModulesComponent } from "./my-modules/my-modules.component";
import { SignupComponent } from "../auth/signup/signup.component";
import { LoginComponent } from "../auth/login/login.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'mymodules',
        component: MyModulesComponent,
        title: 'My Modules'
    },
    {
        path: 'enroll',
        component: EnrollComponent,
        title: 'Enroll Page'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Sign Up'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    }
];
export default routeConfig;