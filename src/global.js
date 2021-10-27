export const PluginWindow = window.open('', '_blank', 'width=800, height=780, toolbar=1');
export const PluginDocument = PluginWindow.document;
PluginDocument.write(`
<html>
<head>
<title>Zoom自動等候室外掛</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<div id="root"></div>
</body>
</html>
`);
export const PluginBody = PluginDocument.body;
export const PluginRoot = PluginDocument.querySelector('#root');

export const ZoomWindow = window;
export const ZoomDocument = ZoomWindow.document;
export const ZoomBody = ZoomDocument.body;
