import React from 'react';
import { PluginWindow } from './global';
import * as ZoomHelper from './helpers/zoom';
import { AllowList } from './views/AllowList';
import { Logs } from './views/Logs';

function App() {
	const [logs, setLogs] = React.useState([]);
	const addLog = React.useCallback(message => setLogs(arr => [...arr, { time: new Date(), message }]), [setLogs]);

	/**
	 * @type {React.MutableRefObject<string[]>}
	 */
	const namesRef = React.useRef([]);
	const updateNames = React.useCallback(
		/**
		 * @param {string[]} newList
		 */
		newList => {
			namesRef.current = newList;
			addLog('更新允許名單\n' + newList.join('\n'));
		},
		[addLog]
	);

	/**
	 * @type {React.MutableRefObject<string[]>}
	 */
	const unallowed = React.useRef([]);

	/**
	 * @type {React.MutableRefObject<boolean>}
	 */
	const detectingRef = React.useRef(false);

	const toggleDetecting = React.useCallback(
		/**
		 * @param {React.ChangeEvent<HTMLInputElement>} evt
		 */
		evt => {
			detectingRef.current = evt.target.checked;
		},
		[]
	);

	React.useEffect(() => {
		const timer = PluginWindow.setInterval(() => {
			if (!detectingRef.current) return;
			ZoomHelper.ensureWaitroomWindow();
			const waitings = ZoomHelper.getWaitroomItems();
			for (const waiting of waitings) {
				if (namesRef.current.includes(waiting.name)) {
					console.log(namesRef.current, waiting.name);
					waiting.allow();
					addLog(`允許加入：${waiting.name}`);
				} else if (!unallowed.current.includes(waiting.name)) {
					addLog(`未授權：${waiting.name}`);
					unallowed.current.push(waiting.name);
				}
			}
		}, 5000);
		PluginWindow.onbeforeunload = () => PluginWindow.clearInterval(timer);
	}, []);

	return (
		<>
			<div>
				<input type="checkbox" id="detect" defaultChecked={false} onChange={toggleDetecting} />
				<label htmlFor="detect">偵測等候室</label>
			</div>
			<div style={{ display: 'flex' }}>
				<AllowList onChange={updateNames} />
				<Logs logs={logs} />
			</div>
		</>
	);
}

export default App;
