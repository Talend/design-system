type ReadOnlyState = {
	onClick?: (e: MouseEvent) => void;
	onKeyDown?: (e: KeyboardEvent) => void;
};

export default function useReadOnly() {
	const readOnlyState: ReadOnlyState = {};
	readOnlyState.onClick = e => {
		e.preventDefault();
	};
	readOnlyState.onKeyDown = e => {
		if (['Space', ' '].some(match => e.key === match)) {
			e.preventDefault();
		}
	};
	return readOnlyState;
}
