import styled from 'styled-components';
import tokens from '../../tokens';

export const InlineEditing = styled.div`
	.edit-inline {
		&--editing {
			&__field {
				position: relative;
				.field__group--input {
					margin: 0;

					.field__control--input {
						padding-right: 4.5rem;
					}
				}

				&__actions {
					position: absolute;
					display: flex;
					bottom: 0;
					right: 0;
					top: 0;
				}
			}
		}

		&--static {
			&.loading {
				animation: ${tokens.animations.heartbeat};
			}

			&__field {
				display: flex;

				&__value {
					display: block;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					flex: 0 1 auto;
				}

				&__action  {
					flex: 0 0 auto;
					opacity: 0;
				}

				&:hover {
					.edit-inline--static__field__action  {
						opacity: 1;
					}
				}
			}
		}
	}
`;

export const InlineEditingValue = styled.span``;
