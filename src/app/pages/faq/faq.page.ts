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
			answer: 'Yes! You can find out more <a href="/premium">here</a>.',
			group: FaqType.GENERAL
		},
		{
			question: 'Can I help translate the bot?',
			answer:
				'Yes! Head over to our project on <a href="https://www.transifex.com/sideprojectguys/invitemanager-bot/">Transifex</a>. After you sign up, you can either help with an existing language, or request a new one to be added. After you have translated parts of our bot, you will get the translator role in our discord!',
			group: FaqType.GENERAL
		},
		{
			question: 'I helped translate the bot. How can I get my role?',
			answer:
				'After you have translated parts of the bot, please contact one of the Lead Developers with your email so they can give you the translator role.',
			group: FaqType.GENERAL
		},
		{
			question: 'I received a DM saying that there is a new bot. Is it true?',
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
			answer: `
			<p>Custom bots automatically have premium activated on all servers they join. We don't have a limit of how many servers you can run your custom bot on, but please only use it on your own servers, otherwise we will have to add a limit.</p>
			<h2>Creating a Bot Token</h2>
			<p>First you have to create a new bot in the <a href="https://discordapp.com/developers/applications/">Discord Developer Portal</a>. Make sure you are logged in with your main Discord Account and click on "New Application" in the top right.</p>
			<img src="/assets/faq/setup-custom-bot/discord-developer-1-add-application.png">
			<p>Now enter the name of your Bot (you can change this again later), and hit "Create".</p>
			<img src="/assets/faq/setup-custom-bot/discord-developer-2-add-application-popup.png">
			<p>Now copy the ID of the CLIENT ID of your bot and save it for later.</p>
			<img src="/assets/faq/setup-custom-bot/discord-developer-3-application-general-info.png">
			<p>Then open the "Bots" tab on the left side and click on "Add Bot".</p>
			<img src="/assets/faq/setup-custom-bot/discord-developer-4-application-bots.png">
			<p>Confirm by clicking on "Yes, do it!".</p>
			<img src="/assets/faq/setup-custom-bot/discord-developer-5-application-bots-add.png">
			<p>Now click the "Copy" button under the TOKEN settings.</p>
			<p>Send a message to one of the <strong>Lead Developers</strong> on our discord containing your <strong>patreon email</strong>, the <strong>CLIENT ID</strong> and the <strong>BOT TOKEN</strong>. If you have been using the regular (blue) or pro (orange) bot and would like us to migrate your data over to your custom bot, please also send us the IDs of the server you want to migrate.</p>
			<p>Example message:</p>
			<p>
			New custom bot<br />
				<strong>EMAIL</strong>: [your patreon email]<br />
				<strong>CLIENT ID</strong>: [your client ID here]<br />
				<strong>BOT TOKEN</strong>: [your bot token here]<br />
				<strong>SERVER IDS</strong>: [id1], [id2], [id3], ...
			</p>
			<p>After we have have this message, it might take us up to 1 day to set up your bot, but if we're online, it's usually much faster.</p>
			<img src="/assets/faq/setup-custom-bot/discord-developer-6-application-bots-token.png">
			<p>On the last page you can also set the logo and name of your bot.</p>
			`,
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
