import styled from 'styled-components';
import { colorSystem } from '../tokens.styles';

export const Styles = styled.div`
	padding: 20px;
	.main {
		max-width: 330px;
		margin: 0 auto;
		text-align: center;
		&__image {
			text-align: center;
			margin: 80px auto;
			position: relative;
			z-index: 10;
			&__surface {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				top: 60%;
				height: 200px;
				width: 160px;
				margin: 0 auto;
				z-index: 11;
			}
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
	.stats {
		max-width: 330px;
		margin: 0 auto;
		margin-top: 50px;
		&__item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px;
			margin-bottom: 8px;
			border: 1px solid ${colorSystem.basePrimaryDesaturated};
		}
	}
`;
