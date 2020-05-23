import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-premium',
	templateUrl: './premium.page.html',
	styleUrls: ['./premium.page.scss']
})
export class PremiumPage implements OnInit {
	public tiers = [
		{
			name: 'Premium',
			price: '$5',
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
			perks: [
				'All of the above',
				'Special Role in our discord',
				'Request new feature for public bot (please contact us first)'
			]
		},
		{
			name: 'VIP',
			price: '$50',
			perks: ['All of the above', 'Access to exclusive <a href="/faq/vip-bot">InviteManager VIP Bot</a>.']
		}
	];

	constructor() {}

	ngOnInit() {}
}
