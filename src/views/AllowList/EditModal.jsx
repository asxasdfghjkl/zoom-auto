import { PluginBody } from '../../global';

export function EditModal({ names, onSave, onClose }) {
	const [editingValue, setEditingValue] = React.useState(names.join('\n'));
	const onChange = React.useCallback(
		evt => {
			setEditingValue(evt.target.value);
		},
		[setEditingValue]
	);

	const onSaveClick = () => {
		const values = new Set(
			editingValue
				.split('\n')
				.map(name => name.trim())
				.filter(name => name)
		);
		onSave([...values]);
	};

	return ReactDOM.createPortal(
		<div className="modal fade show d-block" tabindex="-1" role="dialog" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">編輯允許名單</h5>
					</div>
					<div className="modal-body">
						<textarea className="form-control w-100" rows={10} value={editingValue} onChange={onChange}></textarea>
					</div>
					<div className="modal-footer">
						<button type="submit" className="btn btn-primary" onClick={onSaveClick}>
							儲存
						</button>
						<button className="btn btn-secondary" onClick={onClose}>
							取消
						</button>
					</div>
				</div>
			</div>
		</div>,
		PluginBody
	);
}
