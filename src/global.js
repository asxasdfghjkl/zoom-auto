export const PluginWindow = window.open('', '_blank', 'width=800, height=780, toolbar=1');
export const PluginDocument = PluginWindow.document;
export const PluginBody = PluginDocument.body;
export const PluginRoot = PluginDocument.createElement('div');
PluginBody.appendChild(PluginRoot);

export const ZoomWindow = window;
export const ZoomDocument = ZoomWindow.document;
export const ZoomBody = ZoomDocument.body;