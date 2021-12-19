import React from 'react';
import { useParams } from 'react-router-dom';
import { Styles } from './Header.styles';
import { planetColor } from '../../tokens.styles';

const Header = () => {
	const { planetName, dataType } = useParams();
	return (
		<Styles accent={planetColor[planetName]}>
			<h1>{planetName}</h1>
		</Styles>
	);
};

export default Header;
