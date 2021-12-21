import styled from 'styled-components';

export const Styles = styled.div`
	padding: 20px;
	.main {
		max-width: 330px;
		margin: 0 auto;
		text-align: center;
		&__image {
			text-align: center;
			margin: 80px auto;
		}
		&__description {
			&__text {
				& > * {
					margin-bottom: 20px;
				}
				& span {
					margin-right: 5px;
					font-size: 1.2rem;
				}
			}
			&__links {
				display: none;
			}
		}
	}
`;
