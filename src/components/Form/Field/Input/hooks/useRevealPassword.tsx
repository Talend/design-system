import React, { useState } from 'react';

import { Icon } from '../../../../Icon';
import Button from '../../../../Button';

export default function useRevealPassword() {
	const [revealed, setRevealed] = useState(false);
	const currentType = revealed ? 'text' : 'password';

	function onReveal(event: React.MouseEvent<any>) {
		event.preventDefault();
		setRevealed(prevState => !prevState);
	}

	function onReset() {
		setRevealed(() => false);
	}

	function RevealPasswordButton(props: any) {
		return (
			<Button
				className="reveal__button"
				onMouseDown={e => {
					onReveal(e);
					if (props.onClick) {
						props.onClick(e);
					}
				}}
				tabIndex={-1}
				aria-hidden
				{...props}
			>
				<Icon name={revealed ? 'talend-eye-slash' : 'talend-eye'} />
			</Button>
		);
	}

	return { currentType, onReset, RevealPasswordButton };
}
