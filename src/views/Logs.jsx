import React from 'react';

/**
 * @typedef LogsProps
 * @type {object}
 * @property {LogItem[]} logs
 */

/**
 * @typedef LogItem
 * @type {object}
 * @property {string} type
 * @property {Date} time
 * @property {string} message
 */

/**
 * @param {LogsProps} props
 * @returns
 */
export function Logs({ logs }) {
	/**
	 * @type {React.RefObject<HTMLDivElement>}
	 */
	const rootRef = React.useRef(null);

	React.useEffect(() => {
		if (rootRef.current) {
			rootRef.current.scrollTop = rootRef.current.scrollHeight;
		}
	}, [logs]);

	return (
		<div ref={rootRef} style={{ whiteSpace: 'pre-wrap' }} className="h-100 overflow-auto card">
			<div className="card-body">
				{logs.map(log => (
					<div key={+log.time} className={`alert alert-${log.type || 'light'}`}>
						<strong>
							<time>{log.time.toLocaleTimeString()}</time>
						</strong>{' '}
						<span>{log.message}</span>
					</div>
				))}
			</div>
		</div>
	);
}
