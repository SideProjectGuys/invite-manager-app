import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	public selectedIndex = 0;
	public navGroup1 = [
		{
			title: 'InviteManager Bot',
			url: '/home',
			icon: 'mail'
		},
		{
			title: 'Commands',
			url: '/commands',
			icon: 'paper-plane'
		},
		{
			title: 'FAQ',
			url: '/faq',
			icon: 'paper-plane'
		},
		{
			title: 'Status',
			url: '/status',
			icon: 'paper-plane'
		},
		{
			title: 'Get Premium',
			url: '/premium',
			icon: 'paper-plane'
		}
	];

	public navGroup2 = [
		{
			title: 'Join Server',
			url: '/folder/Spam',
			icon: 'warning'
		},
		{
			title: 'Login with Discord',
			url: '/folder/Spam',
			icon: 'warning'
		}
	];

	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	ngOnInit() {
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.navGroup1.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
		}
	}
}
