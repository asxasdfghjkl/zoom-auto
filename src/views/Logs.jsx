/**
 * @typedef LogsProps
 * @type {object}
 * @property {LogItem[]} logs
 */

/**
 * @typedef LogItem
 * @type {object}
 * @property {Date} time
 * @property {string} message
 */

/**
 * @param {LogsProps} props
 * @returns
 */
export function Logs({ logs }) {
	return (
		<ul style={{ whiteSpace: 'pre-wrap' }}>
			{logs.map(log => (
				<li key={+log.time}>
					<time>{log.time.toLocaleTimeString()}</time> <span>{log.message}</span>
				</li>
			))}
		</ul>
	);
}
