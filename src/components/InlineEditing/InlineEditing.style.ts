import styled from 'styled-components';

export const InlineEditing = styled.div`
	.edit-inline {
		&--editing {
			&__field {
				position: relative;

				&__actions {
					position: absolute;
					right: 0;
					bottom: 9px;
				}
			}
		}

		&--static {
			&__field {
				display: flex;

				span {
					display: block;
					width: 100%;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
			}
		}
	}
`;
