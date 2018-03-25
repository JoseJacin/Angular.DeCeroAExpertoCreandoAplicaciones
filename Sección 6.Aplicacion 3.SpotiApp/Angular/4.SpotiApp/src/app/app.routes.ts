import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const app_routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home'}
];

/* Siempre dejar el '{ useHash: true }' */
export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
