import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule)
	},
	{
		path: 'faq',
		loadChildren: () => import('./pages/faq/faq.module').then((m) => m.FaqPageModule)
	},
	{
		path: 'faq/:id',
		loadChildren: () => import('./pages/faq/faq.module').then((m) => m.FaqPageModule)
	},
	{
		path: 'premium',
		loadChildren: () => import('./pages/premium/premium.module').then((m) => m.PremiumPageModule)
	},
	{
		path: 'status',
		loadChildren: () => import('./pages/status/status.module').then((m) => m.StatusPageModule)
	},
	{
		path: 'commands',
		loadChildren: () => import('./pages/commands/commands.module').then((m) => m.CommandsPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
