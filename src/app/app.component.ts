import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

const { Browser } = Plugins;

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	public selectedIndex: number = 0;
	public navGroup1: { title: string; url: string }[] = [
		{
			title: 'InviteManager Bot',
			url: '/home'
		},
		{
			title: 'Commands',
			url: '/commands'
		},
		{
			title: 'FAQ',
			url: '/faq'
		},
		{
			title: 'Status',
			url: '/status'
		},
		{
			title: 'Get Premium',
			url: '/premium'
		}
	];

	public navGroup2: { title: string; url: string }[] = [
		{
			title: 'Join Server',
			url: 'https://discord.com/invite/S977tw2'
		},
		{
			title: 'Webpanel',
			url: 'https://app.invitemanager.gg'
		}
	];

	public constructor(
		private readonly platform: Platform,
		private readonly splashScreen: SplashScreen,
		private readonly statusBar: StatusBar
	) {
		this.initializeApp().catch(console.error);
	}

	public async ngOnInit(): Promise<void> {
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.navGroup1.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
		}
	}

	public async openUrl(url: string): Promise<void> {
		await Browser.open({ url });
	}

	private async initializeApp() {
		if (this.platform.is('capacitor')) {
			await this.platform.ready();
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		}
	}
}
