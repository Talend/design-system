import React from 'react';

import Field, { FieldProps } from '../Field';

import * as S from './Textarea.style';

const Textarea = React.forwardRef<HTMLElement, FieldProps>((props, ref) => {
	return <Field {...props} as={S.Textarea} ref={ref} />;
});

export default Textarea;
