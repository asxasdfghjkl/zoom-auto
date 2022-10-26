import { ZoomDocument } from './../global';
import { hover } from './mouse';

/**
 * @typedef WaitroomItem
 * @type {object}
 * @property {string} name
 * @property {()=>void} allow
 */

/**
 * @returns {WaitroomItem[]}
 */
export function getWaitroomItems() {
	const items = ZoomDocument.querySelectorAll('.waiting-room-list-container .participants-li');
	return [...items].map(item => {
		return {
			name: item.querySelector('.participants-item__display-name').textContent,
			allow: allowWaiting(item),
		};
	});
}
/**
 *
 * @param {HTMLLIElement} element
 */
function allowWaiting(element) {
	return () => {
		hover(element);
		setTimeout(() => {
			const joinButton = element.querySelector('.participants-item__right-section button.btn-primary');
			joinButton.click();
		}, 10);
	};
}

export function ensureWaitroomWindow() {
	const containerClass = ".participants-section-container"
	let container = ZoomDocument.querySelector(containerClass);
	if (container) {
		return true;
	}
	const toggleBtn = ZoomDocument.querySelector('div[feature-type="participants"] button') || [...ZoomDocument.querySelectorAll('div.more-button a[role="menuitem"]')].find(item => ['與會者', 'Participants'].includes(item.textContent));
	if (toggleBtn) {
		toggleBtn.click();
	}
	return !!ZoomDocument.querySelector(containerClass);
}
