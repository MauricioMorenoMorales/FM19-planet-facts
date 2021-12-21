import styled from 'styled-components';
import { colorSystem } from '../tokens.styles';

export const Styles = styled.div`
	padding-right: 20px;
	padding-left: 20px;
	padding-bottom: 20px;
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
					color: ${colorSystem.basePrimaryMoreDesaturated};
				}
				& a {
					font-weight: bold;
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
	@media screen and (min-width: 768px) {
		.main {
			max-width: 700px;
			&__description {
				display: grid;
				grid-template-columns: 1fr 290px;
				text-align: start;
				align-items: end;
				&__links {
					display: block;
					margin-bottom: 40px;
					&__item {
						display: flex;
						align-items: center;
						padding: 10px;
						border: 1px solid ${colorSystem.basePrimaryDesaturated};
						margin-bottom: 8px;
						cursor: pointer;
						&:hover {
							background-color: ${props => props.accent};
						}
						& small {
							margin-right: 20px;
						}
					}
				}
				&__text {
					padding-right: 30px;
				}
			}
		}
		.stats {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			margin: 0 auto;
			max-width: 700px;
			margin-top: 70px;
			gap: 8px;
			&__item {
				display: flex;
				flex-direction: column;
				align-items: start;
				text-align: start;
			}
		}
	}
	@media screen and (min-width: 1100px) {
		.main {
			max-width: 1100px;
			height: 600px;
			display: grid;
			grid-template-columns: 1fr 350px;
			align-items: center;
			&__description {
				display: block;
				&__links {
					margin-top: 10px;
				}
			}
			&__image {
				margin: 0;
				&__planet {
				}
			}
		}
		.stats {
			max-width: 1100px;
		}
	}
`;
