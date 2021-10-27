import React from 'react';
import { PluginWindow } from './global';
import * as ZoomHelper from './helpers/zoom';
import { AllowList } from './views/AllowList';
import { Logs } from './views/Logs';

function App() {
	const [logs, setLogs] = React.useState([]);
	const addLog = React.useCallback((message, type) => setLogs(arr => [...arr, { time: new Date(), message, type }]), [setLogs]);

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
			addLog(`${evt.target.checked ? '開始' : '停止'}偵測等候室`, 'info');
		},
		[addLog]
	);

	/**
	 * @type {React.MutableRefObject<boolean>}
	 */
	const strictCompareRef = React.useRef(true);

	const toggleStrictCompareRef = React.useCallback(
		/**
		 * @param {React.ChangeEvent<HTMLInputElement>} evt
		 */
		evt => {
			strictCompareRef.current = evt.target.checked;
			addLog(`${evt.target.checked ? '開啟' : '關閉'}嚴格模式`, 'info');
		},
		[]
	);

	React.useEffect(() => {
		const timer = PluginWindow.setInterval(() => {
			if (!detectingRef.current) return;
			ZoomHelper.ensureWaitroomWindow();
			const waitings = ZoomHelper.getWaitroomItems();
			for (const waiting of waitings) {
				const match = strictCompareRef.current
					? namesRef.current.includes(waiting.name)
					: namesRef.current.some(name => new RegExp(name).test(waiting.name));
				if (match) {
					console.debug(namesRef.current, waiting.name);
					waiting.allow();
					addLog(`允許加入：${waiting.name}`, 'success');
				} else if (!unallowed.current.includes(waiting.name)) {
					addLog(`未授權：${waiting.name}`, 'danger');
					unallowed.current.push(waiting.name);
				}
			}
		}, 5000);
		PluginWindow.onbeforeunload = () => PluginWindow.clearInterval(timer);
	}, []);

	return (
		<div className="d-flex flex-column vh-100 vw-100 p-3">
			<header className="mb-3 d-flex">
				<div class="form-check mx-3">
					<input class="form-check-input" type="checkbox" id="detect" defaultChecked={false} onChange={toggleDetecting} />
					<label class="form-check-label" for="detect">
						偵測等候室
					</label>
				</div>
				<div class="form-check mx-3">
					<input class="form-check-input" type="checkbox" id="strictCompare" defaultChecked onChange={toggleStrictCompareRef} />
					<label class="form-check-label" for="strictCompare">
						嚴格模式
					</label>
				</div>
			</header>
			<main className="d-flex flex-grow-1 conatiner-fluid overflow-hidden">
				<div className="col-12 col-md-4 h-100">
					<AllowList onChange={updateNames} />
				</div>
				<div className="col-12 col-md-8 h-100">
					<Logs logs={logs} />
				</div>
			</main>
		</div>
	);
}

export default App;
