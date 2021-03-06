import { css, keyframes } from 'styled-components';

export const heartbeat = keyframes`
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.25; }
`;

export default {
	heartbeat: css`
		  1.5s ${heartbeat} ease infinite;
	`,
};
