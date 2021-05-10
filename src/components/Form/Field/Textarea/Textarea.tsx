import React from 'react';

import Field from '../Field';

import * as S from './Textarea.style';

export type TextareaProps = HTMLTextAreaElement;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
	return <Field {...props} as={S.Textarea} ref={ref} />;
});

export default Textarea;
