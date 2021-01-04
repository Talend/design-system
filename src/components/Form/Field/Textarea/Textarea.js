import React from 'react';
import Field from '../Field';

function Textarea({ children, ...rest }) {
	const textarea = React.createRef();

	function getScrollHeight(elm) {
		var savedValue = elm.value;
		elm.value = '';
		elm._baseScrollHeight = elm.scrollHeight;
		elm.value = savedValue;
	}

	function autosize() {
		const elm = textarea.current;
		var minRows = +elm.getAttribute('data-min-rows') || 0,
			rows;
		if (!elm._baseScrollHeight) {
			getScrollHeight(elm);
		}

		elm.rows = minRows;
		rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16);
		elm.rows = minRows + rows;
	}

	return (
		<Field as="textarea" ref={textarea} row={3} data-min-rows="3" {...rest} onInput={autosize}>
			{children}
		</Field>
	);
}

export default Textarea;
