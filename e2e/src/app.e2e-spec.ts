import { AppPage } from './app.po';

describe('InviteManager', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});
	describe('default screen', () => {
		beforeEach(() => {
			page.navigateTo('/');
		});
		it('should contain text', () => {
			expect(page.getParagraphText()).toContain('discord');
		});
	});
});
