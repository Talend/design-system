import React from 'react';
import Field from '../Field';

export type DatalistProps = HTMLInputElement & {
	values: string[];
};

const Datalist = React.forwardRef<HTMLInputElement, DatalistProps>(
	({ id = `datalist--${Date.now()}`, values = [], ...rest }, ref) => {
		const listId = `list-${id}`;
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
