import styled from 'styled-components';
import { colorSystem } from '../../tokens.styles';

export const Styles = styled.div`
	.header {
		&__name {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 20px;
			border-bottom: 1px solid ${colorSystem.basePrimaryDesaturated};
			& > img {
				cursor: pointer;
			}
			&.opened {
				position: fixed;
				top: 0;
				right: 0;
				left: 0;
				background-color: ${colorSystem.basePrimary};
			}
		}
		&__plegable {
			display: none;
			&.opened {
				display: block;
				position: fixed;
				background-color: ${colorSystem.basePrimary};
				width: 100%;
				height: 100vh;
				top: 77px;
			}
			&__item {
				display: flex;
				align-items: center;
				height: 60px;
				padding: 0 20px;
				border-bottom: 1px solid ${colorSystem.basePrimaryDesaturated};
				& div {
					width: 20px;
					height: 20px;
					border-radius: 50%;
					margin-right: 20px;
				}
			}
		}
		&__themes {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			border-bottom: 1px solid ${colorSystem.basePrimaryDesaturated};
			& a {
				height: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: bold;
				&.active {
					border-bottom: 3px solid ${props => props.accent};
				}
			}
		}
		&__planets {
			display: none;
		}
	}
	@media screen and (min-width: 768px) {
		.header {
			&__name {
				justify-content: center;
				border-bottom: none;
				& > img {
					display: none;
				}
			}
			&__themes {
				display: none;
			}
			&__planets {
				display: grid;
				grid-template-columns: repeat(8, 1fr);
				justify-items: center;
				border-bottom: 1px solid ${colorSystem.basePrimaryDesaturated};
				& a {
					font-weight: bold;
					height: 60px;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					&.active {
						border-bottom: 2px solid ${props => props.accent};
					}
				}
			}
		}
	}
	@media screen and (min-width: 1100px) {
		display: grid;
		grid-template-columns: 1fr 700px;
		height: 60px;
		border-bottom: 1px solid ${colorSystem.basePrimaryDesaturated};
		.header {
			&__name {
				justify-self: start;
				align-self: center;
				padding: 0;
				padding-left: 20px;
			}
			&__planets {
				border-bottom: none;
				& a {
					&.active {
						border: none;
						border-top: 2px solid ${props => props.accent};
					}
				}
			}
		}
	}
`;
