import React from 'react';

import Field from '../Field';

import * as S from './Textarea.style';

export type TextareaProps = HTMLTextAreaElement;

const Textarea = (props: TextareaProps) => {
	return <Field as={S.Textarea} {...props} />;
};

export default Textarea;
