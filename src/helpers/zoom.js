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
	let container = ZoomDocument.querySelector('.participants-section-container');
	if (container) {
		return true;
	}
	const toggleBtn = ZoomDocument.querySelector('.footer-button__participants-icon').parentElement.parentElement;
	toggleBtn.click();
	return !!ZoomDocument.querySelector('.participants-section-container');
}
