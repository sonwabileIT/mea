import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EnrollComponent } from "./enroll/enroll.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'enroll',
        component: EnrollComponent,
        title: 'Enroll Page'
    }
];
export default routeConfig;