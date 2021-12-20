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
	}
	@media screen and (min-width: 768px) {
		.header {
			&__name {
				& > img {
					display: none;
				}
			}
		}
	}
`;
