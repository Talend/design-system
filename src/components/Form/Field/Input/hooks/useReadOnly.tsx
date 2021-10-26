type ReadOnlyState = {
	'aria-checked'?: string | number | boolean | (string | number)[];
	checked?: string | number | boolean | (string | number)[];
	onClick?: (e: MouseEvent) => void;
	onKeyDown?: (e: KeyboardEvent) => void;
	readOnly: boolean;
};

export default function useReadOnly(
	checked: boolean | 'indeterminate' | (string | number)[] | undefined,
) {
	const readOnlyState: ReadOnlyState = {
		readOnly: true,
	};
	readOnlyState.onClick = e => {
		e.preventDefault();
	};
	readOnlyState.onKeyDown = e => {
		if (['Space', ' '].some(match => e.key === match)) {
			e.preventDefault();
		}
	};
	readOnlyState['aria-checked'] = checked;
	readOnlyState.checked = checked;
	return readOnlyState;
}
