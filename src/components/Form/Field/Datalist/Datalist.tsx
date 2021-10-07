import React, { InputHTMLAttributes } from 'react';
import { unstable_useId as useId } from 'reakit';
import Field, { FieldProps } from '../Field';

export type DatalistProps = FieldProps & {
	values: string[];
};

const Datalist = React.forwardRef(
	({ id, values = [], ...rest }: DatalistProps, ref: React.Ref<HTMLInputElement> | undefined) => {
		const { id: reakitId } = useId();
		const listId = `list--${id || reakitId}`;

		return (
			<>
				<Field {...rest} id={id} list={listId} ref={ref} />
				<datalist id={listId}>
					{values.map((value: string, index: React.Key) => (
						// eslint-disable-next-line jsx-a11y/control-has-associated-label
						<option key={index} value={value} />
					))}
				</datalist>
			</>
		);
	},
);

export default Datalist;
