import React from 'react';
import Field from '../Field';

function Textarea({ children, row = 3, ...rest }) {
	const textarea = React.createRef();

	function autosize() {
		const elm = textarea.current;
		elm.style.height = '1rem';
		elm.style.height = `${elm.scrollHeight}px`;
	}

	return (
		<Field as="textarea" onInput={autosize} ref={textarea} row={row} {...rest}>
			{children}
		</Field>
	);
}

export default Textarea;
