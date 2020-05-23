import { Component } from '@angular/core';

enum FaqGroup {
	GENERAL = 'general',
	PRO_BOT = 'pro-bot',
	CUSTOM_BOT = 'custom-bot'
}

interface Faq {
	question: string;
	answer: string;
	group: FaqGroup;
	open?: boolean;
}

@Component({
	selector: 'app-faq',
	templateUrl: './faq.page.html',
	styleUrls: ['./faq.page.scss']
})
export class FaqPage {
	public faqs: Faq[] = [
		{
			question: 'What is the InviteManager bot?',
			answer: 'Answer...',
			group: FaqGroup.GENERAL
		},
		{
			question: 'How can I set up join and leave messages?',
			answer: 'Answer...',
			group: FaqGroup.GENERAL
		},
		{
			question: 'Is there a premium version?',
			answer: 'Answer...',
			group: FaqGroup.GENERAL
		},
		{
			question: 'How can I clear all my invites?',
			answer: 'Answer...',
			group: FaqGroup.GENERAL
		},
		{
			question: 'Why is the bot offline?',
			answer: 'Answer...',
			group: FaqGroup.GENERAL
		},
		{
			question: 'The bot is down and I need it on my server. What can I do?',
			answer: 'Answer...',
			group: FaqGroup.GENERAL
		},
		{
			question: 'What are the advantages of the pro bot?',
			answer: 'Answer...',
			group: FaqGroup.PRO_BOT
		},
		{
			question: 'I bought premium, how can I get the pro bot?',
			answer: 'Answer...',
			group: FaqGroup.PRO_BOT
		},
		{
			question: 'On how many servers can I use my pro bot?',
			answer: 'Answer...',
			group: FaqGroup.PRO_BOT
		},
		{
			question: 'How can I deactivate premium on a server?',
			answer: 'Answer...',
			group: FaqGroup.PRO_BOT
		},
		{
			question: 'I bought the custom bot, how can I get it?',
			answer: 'Answer...',
			group: FaqGroup.CUSTOM_BOT
		},
		{
			question: 'How can I change the name of my bot?',
			answer: 'Answer...',
			group: FaqGroup.CUSTOM_BOT
		},
		{
			question: 'How can I change the profile picture of my bot?',
			answer: 'Answer...',
			group: FaqGroup.CUSTOM_BOT
		},
		{
			question: 'How can I change the activity message of my bot?',
			answer: 'Answer...',
			group: FaqGroup.CUSTOM_BOT
		},
		{
			question: 'On how many servers can I use my custom bot?',
			answer: 'Answer...',
			group: FaqGroup.CUSTOM_BOT
		},
		{
			question: 'How can I control which servers can use my custom bot?',
			answer: 'Answer...',
			group: FaqGroup.CUSTOM_BOT
		}
	];

	constructor() {}
}
