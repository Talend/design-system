import React from 'react';
import styled from 'styled-components';

const IframeRow = styled.div`
	display: flex;
`;

const IframeCell = styled.div`
	flex: 1 1 50%;
`;

const Iframe = styled.iframe`
	border-radius: 0.4rem;
	box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
	border: 1px solid rgba(0, 0, 0, 0.1);
`;

const iframeProps = {
	height: 600,
	width: '100%',
	allowFullScreen: true,
};

const FigmaIframe = ({ light, dark, ...rest }) => (
	<IframeRow>
		{light && (
			<IframeCell className="figma-iframe figma-iframe--light">
				<Iframe
					{...iframeProps}
					{...rest}
					src={`https://www.figma.com/embed?embed_host=storybook&url=\
                  ${light}`}
				/>
			</IframeCell>
		)}
		{dark && (
			<IframeCell className="figma-iframe figma-iframe--dark">
				<Iframe
					{...iframeProps}
					{...rest}
					src={`https://www.figma.com/embed?embed_host=storybook&url=\
				  ${dark}`}
				/>
			</IframeCell>
		)}
	</IframeRow>
);

export default FigmaIframe;
