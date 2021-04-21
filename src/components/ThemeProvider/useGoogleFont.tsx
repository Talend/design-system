import { useEffect, useRef } from 'react';

function useGoogleFont(url: string) {
	const headRef = useRef<HTMLHeadElement>(null);

	useEffect(() => {
		// @ts-ignore
		headRef.current = document.head;
		const link = document.createElement('link');
		link.setAttribute('rel', 'preconnect');
		link.setAttribute('href', 'https://fonts.gstatic.com');
		headRef.current.append(link);
	}, []);

	useEffect(() => {
		const link = document.createElement('link');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', url);
		// @ts-ignore
		headRef.current.append(link);
	}, [url]);
}

export default useGoogleFont;
