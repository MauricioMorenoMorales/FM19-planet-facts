import React from 'react';
import { useParams } from 'react-router-dom';
import { Styles } from './Header.styles';
import { planetColor } from '../../tokens.styles';

const Header = () => {
	const { planetName, dataType } = useParams();
	return (
		<Styles accent={planetColor[planetName]}>
			<section className="header__name"></section>
			<section className="header__themes"></section>
			<section className="header__planets"></section>
		</Styles>
	);
};

export default Header;
