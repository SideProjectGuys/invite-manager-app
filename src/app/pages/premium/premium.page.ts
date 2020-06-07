import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

interface Tier {
	name: string;
	price: string;
	url: string;
	perks: string[];
}

@Component({
	selector: 'app-premium',
	templateUrl: './premium.page.html',
	styleUrls: ['./premium.page.scss']
})
export class PremiumPage {
	public tiers: Tier[] = [
		{
			name: 'Pro',
			price: '$5',
			url: 'https://patreon.com/invitemanager',
			perks: [
				'Access to <b>Premium features</b>',
				'Access to pro bot with Orange logo',
				'Higher Uptime',
				'Music Features',
				'Export join and leave history'
			]
		},
		{
			name: 'Custom Bot',
			price: '$10',
			url: 'https://patreon.com/invitemanager',
			perks: [
				'All of the above',
				'Own bot instance with special features',
				'Custom logo',
				'Custom name',
				'Custom now playing status',
				'<a href="/faq/custom-bot">Read more about the custom bot here</a>'
			]
		},
		{
			name: 'Premium Member',
			price: '$20',
			url: 'https://patreon.com/invitemanager',
			perks: [
				'All of the above',
				'Special Role in our discord',
				'Request new feature for public bot (please contact us first)'
			]
		},
		{
			name: 'VIP',
			price: '$50',
			url: 'https://patreon.com/invitemanager',
			perks: ['All of the above', 'Access to exclusive <a href="/faq/vip-bot">InviteManager VIP Bot</a>.']
		}
	];

	public constructor() {}

	public async openUrl(url: string): Promise<void> {
		await Browser.open({ url });
	}
}
