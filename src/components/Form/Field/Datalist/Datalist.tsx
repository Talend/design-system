import React from 'react';
import Field from '../Field';

export type DatalistProps = HTMLInputElement & {
	values?: string[];
};

export const Datalist = ({ id = `datalist--${Date.now()}`, values, ...rest }: DatalistProps) => {
	const listId = `datalist-${id}`;
	return (
		<>
			{' '}
			<Field {...rest} id={id} list={listId} />
			{values && (
				<datalist id={listId}>
					{values.map((value: string, index: React.Key) => (
						// eslint-disable-next-line jsx-a11y/control-has-associated-label
						<option key={index} value={value} />
					))}
				</datalist>
			)}
		</>
	);
};

export default Datalist;
