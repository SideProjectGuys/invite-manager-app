import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	constructor() {}

	ngOnInit() {}

	public async openUrl(url: string): Promise<void> {
		await Browser.open({ url });
	}
}
