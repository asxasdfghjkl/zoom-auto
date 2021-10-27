import { EditModal } from './EditModal';

export function AllowList({ onChange = newList => undefined }) {
	const [names, setNames] = React.useState([]);

	const [showEdit, setShowEdit] = React.useState(false);
	return (
		<div className="px-3 d-flex flex-column h-100">
			<button className="btn btn-primary mb-2" onClick={() => setShowEdit(true)}>
				編輯允許名單
			</button>
			<ul className="list-group flex-grow-1 overflow-auto">
				{names.map(name => (
					<li key={name} className="list-group-item">
						{name}
					</li>
				))}
				{names.length === 0 && <li className="list-group-item">空白的允許清單</li>}
			</ul>
			{showEdit && (
				<EditModal
					names={names}
					onSave={newNames => {
						setNames(newNames);
						setShowEdit(false);
						onChange(newNames);
					}}
					onClose={() => setShowEdit(false)}
				/>
			)}
		</div>
	);
}
