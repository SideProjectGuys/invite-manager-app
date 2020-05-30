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
	public searchTerm: string = '';
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
			question: 'Can I pay for premium with Bitcoin or Ethereum?',
			answer: 'Answer...',
			group: FaqGroup.PRO_BOT
		},
		{
			question: 'Can I pay for premium with Paypal?',
			answer: 'Answer...',
			group: FaqGroup.PRO_BOT
		},
		{
			question: 'Do you offer a lifetime payment instead of a monthly payment?',
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
			question: 'I lost access to my old account and I would like to have my bot token back. What can I do?',
			answer: `We're sorry you lost access to your account. For security reasons, we will <strong>never</strong> give out a bot token that has been given to us. We handle the tokens very carefully and make sure nobody gets access to them. We use them only for the purpose of running our bot. If you might need your bot token at a later time, please make a backup yourself.`,
			group: FaqGroup.CUSTOM_BOT
		},
		{
			question: 'How can I control which servers can use my custom bot?',
			answer: 'Answer...',
			group: FaqGroup.CUSTOM_BOT
		}
	];

	public filteredFaqs: Faq[] = this.faqs;

	constructor() {}

	public async applyFilter(event?: { target?: { value?: string } }): Promise<void> {
		const searchTerm: string | undefined = event?.target?.value;
		if (searchTerm) {
			const lowerCaseSearchTerm: string = searchTerm.toLowerCase();
			this.filteredFaqs = this.faqs.filter(
				(faq) =>
					faq.question.toLowerCase().includes(lowerCaseSearchTerm) ||
					faq.answer.toLowerCase().includes(lowerCaseSearchTerm)
			);
		} else {
			this.filteredFaqs = this.faqs;
		}
	}
}
