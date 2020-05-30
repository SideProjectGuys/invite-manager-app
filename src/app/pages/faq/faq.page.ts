import { Component } from '@angular/core';

enum FaqType {
	GENERAL = 'general',
	SUPPORT = 'support',
	PRO_BOT = 'pro-bot',
	CUSTOM_BOT = 'custom-bot',
	VIP_BOT = 'vip-bot'
}

interface Faq {
	question: string;
	answer: string;
	group: FaqType;
	open?: boolean;
}

interface FaqGroup {
	title: string;
	faqs: Faq[];
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
			group: FaqType.GENERAL
		},
		{
			question: 'Is there a premium version?',
			answer: 'Answer...',
			group: FaqType.GENERAL
		},
		{
			question: 'How can I set up join and leave messages?',
			answer: 'Answer...',
			group: FaqType.SUPPORT
		},
		{
			question: 'How can I clear all my invites?',
			answer: 'Answer...',
			group: FaqType.SUPPORT
		},
		{
			question: 'Why is the bot offline?',
			answer: 'Answer...',
			group: FaqType.SUPPORT
		},
		{
			question: 'The bot is down and I need it on my server. What can I do?',
			answer: 'Answer...',
			group: FaqType.SUPPORT
		},
		{
			question: 'What are the advantages of the pro bot?',
			answer: 'Answer...',
			group: FaqType.PRO_BOT
		},
		{
			question: 'I bought premium, how can I get the pro bot?',
			answer: 'Answer...',
			group: FaqType.PRO_BOT
		},
		{
			question: 'On how many servers can I use my pro bot?',
			answer: 'Answer...',
			group: FaqType.PRO_BOT
		},
		{
			question: 'How can I deactivate premium on a server?',
			answer: 'Answer...',
			group: FaqType.PRO_BOT
		},
		{
			question: 'Can I pay for premium with Bitcoin or Ethereum?',
			answer: 'Answer...',
			group: FaqType.PRO_BOT
		},
		{
			question: 'Can I pay for premium with Paypal?',
			answer: 'Answer...',
			group: FaqType.PRO_BOT
		},
		{
			question: 'Do you offer a lifetime payment instead of a monthly payment?',
			answer: 'Answer...',
			group: FaqType.PRO_BOT
		},
		{
			question: 'I bought the custom bot, how can I get it?',
			answer: 'Answer...',
			group: FaqType.CUSTOM_BOT
		},
		{
			question: 'How can I change the name of my bot?',
			answer: 'Answer...',
			group: FaqType.CUSTOM_BOT
		},
		{
			question: 'How can I change the profile picture of my bot?',
			answer: 'Answer...',
			group: FaqType.CUSTOM_BOT
		},
		{
			question: 'How can I change the activity message of my bot?',
			answer: 'Answer...',
			group: FaqType.CUSTOM_BOT
		},
		{
			question: 'On how many servers can I use my custom bot?',
			answer: 'Answer...',
			group: FaqType.CUSTOM_BOT
		},
		{
			question: 'I lost access to my old account and I would like to have my bot token back. What can I do?',
			answer: `We're sorry you lost access to your account. For security reasons, we will <strong>never</strong> give out a bot token that has been given to us. We handle the tokens very carefully and make sure nobody gets access to them. We use them only for the purpose of running our bot. If you might need your bot token at a later time, please make a backup yourself.`,
			group: FaqType.CUSTOM_BOT
		},
		{
			question: 'How can I control which servers can use my custom bot?',
			answer: 'Answer...',
			group: FaqType.CUSTOM_BOT
		},
		{
			question: 'What is the VIP bot?',
			answer: 'Answer...',
			group: FaqType.VIP_BOT
		},
		{
			question: 'What extra features does the VIP bot offer?',
			answer: 'Answer...',
			group: FaqType.VIP_BOT
		}
	];

	public filteredGroupedFaqs: FaqGroup[] = [];

	constructor() {
		this.applyFilter().catch(console.error);
	}

	public async applyFilter(event?: { target?: { value?: string } }): Promise<void> {
		const searchTerm: string | undefined = event?.target?.value;
		let filteredFaqs: Faq[] = this.faqs;
		if (typeof searchTerm === 'string') {
			const lowerCaseSearchTerm: string = searchTerm.toLowerCase();
			filteredFaqs = this.faqs.filter(
				(faq) =>
					faq.question.toLowerCase().includes(lowerCaseSearchTerm) ||
					faq.answer.toLowerCase().includes(lowerCaseSearchTerm)
			);
		}
		const groups: Set<string> = new Set();
		filteredFaqs.forEach((faq) => {
			groups.add(faq.group);
		});
		this.filteredGroupedFaqs = Array.from(groups).map((group) => {
			return { title: group, faqs: filteredFaqs.filter((faq) => faq.group === group) } as FaqGroup;
		});
	}
}
