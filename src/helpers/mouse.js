/**
 * send MouseOver event to elemnt
 * @param {Element} element
 */
export function hover(element) {
	const evt = new MouseEvent('mouseover', { bubbles: true, cancelable: false });
	element.dispatchEvent(evt);
}
