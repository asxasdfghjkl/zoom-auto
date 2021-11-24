import App from './App';
import { PluginRoot, PluginWindow, ZoomWindow } from './global';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	PluginRoot
);

ZoomWindow.addEventListener('beforeunload', evt => {
	evt.returnValue = '你確定要關閉Zoom會議嗎？';
	evt.preventDefault();
	return true;
});
ZoomWindow.addEventListener('unload', () => {
	PluginWindow.close();
});
