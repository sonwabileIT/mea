import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EnrollComponent } from "./enroll/enroll.component";
import { MyModulesComponent } from "./my-modules/my-modules.component";

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
    }
];
export default routeConfig;