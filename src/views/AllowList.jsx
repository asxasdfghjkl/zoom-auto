import { usePersistFunction } from './../hooks/usePersisFunction';
import { PluginWindow } from './../global';

export function AllowList({ onChange = newList => undefined }) {
	const [names, setNames] = React.useState([]);
	const [input, setInput] = React.useState('');
	const inputRef = React.useRef('');
	inputRef.current = input;
	const onInput = React.useCallback(evt => setInput(evt.target.value), [setInput]);

	const onAddName = React.useCallback(
		/**
		 *
		 * @param {React.FormEvent} evt
		 * @returns
		 */
		evt => {
			if (evt) {
				evt.preventDefault();
				evt.stopPropagation();
			}
			var inputName = inputRef.current;
			setInput('');
			if (names.includes(inputName)) {
				return PluginWindow.alert('已存在允許名單中');
			}
			setNames(arr => [...arr, inputName]);
		},
		[setInput, setNames]
	);

	const onDeleteName = React.useCallback(evt => {
		const removeName = evt.currentTarget.dataset.name;
		setNames(arr => arr.filter(item => item !== removeName));
	}, []);

	React.useEffect(() => onChange(names), [names]);

	return (
		<div>
			<h4>允許名單{names.length === 0 ? '' : `： ${names.length}人`}</h4>
			<ul>
				{names.map(name => (
					<li key={name}>
						<button data-name={name} onClick={onDeleteName}>
							刪除
						</button>{' '}
						{name}
					</li>
				))}
				<li>
					<form onSubmit={onAddName}>
						<input required value={input} onChange={onInput} />
						<button type="submit">新增</button>
					</form>
				</li>
			</ul>
		</div>
	);
}
