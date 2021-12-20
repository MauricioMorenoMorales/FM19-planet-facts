import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Styles } from './Header.styles';
import { planetColor } from '../../tokens.styles';
import BurgerIcon from '../../assets/icon-hamburger.svg';

const Header = () => {
	const { planetName, dataType } = useParams();
	const [plegableOpened, setPlegableOpened] = useState(false);
	return (
		<Styles accent={planetColor[planetName]}>
			<section className="header__name">
				<h1>THE PLANETS</h1>
				<img src={BurgerIcon} alt="" />
			</section>
			<section className="header__themes">
				<Link to={`/planets/${planetName}/overview`}>Overview</Link>
				<Link to={`/planets/${planetName}/structure`}>Structure</Link>
				<Link to={`/planets/${planetName}/geology`}>Geology</Link>
			</section>
			<section className="header__planets">
				<Link to={`/planets/mercury/${dataType}`}>Mercury</Link>
				<Link to={`/planets/venus/${dataType}`}>Venus</Link>
				<Link to={`/planets/earth/${dataType}`}>Earth</Link>
				<Link to={`/planets/mars/${dataType}`}>Mars</Link>
				<Link to={`/planets/jupiter/${dataType}`}>Jupiter</Link>
				<Link to={`/planets/saturn/${dataType}`}>Saturn</Link>
				<Link to={`/planets/uranus/${dataType}`}>Uranus</Link>
				<Link to={`/planets/neptune/${dataType}`}>Neptune</Link>
			</section>
			<section className={`header__plegable ${plegableOpened && 'opened'}`}>
				<div className="header__plegable__item">
					<div style={{ backgroundColor: planetColor.mercury }}></div>
					<Link to={`/planets/mercury/${dataType}`}>Mercury</Link>
				</div>
				<div className="header__plegable__item">
					<div style={{ backgroundColor: planetColor.venus }}></div>
					<Link to={`/planets/venus/${dataType}`}>Venus</Link>
				</div>
				<div className="header__plegable__item">
					<div style={{ backgroundColor: planetColor.earth }}></div>
					<Link to={`/planets/earth/${dataType}`}>Earth</Link>
				</div>
				<div className="header__plegable__item">
					<div style={{ backgroundColor: planetColor.mars }}></div>
					<Link to={`/planets/mars/${dataType}`}>Mars</Link>
				</div>
				<div className="header__plegable__item">
					<div style={{ backgroundColor: planetColor.jupiter }}></div>
					<Link to={`/planets/jupiter/${dataType}`}>Jupiter</Link>
				</div>
				<div className="header__plegable__item">
					<div style={{ backgroundColor: planetColor.saturn }}></div>
					<Link to={`/planets/saturn/${dataType}`}>Saturn</Link>
				</div>
				<div className="header__plegable__item">
					<div style={{ backgroundColor: planetColor.uranus }}></div>
					<Link to={`/planets/uranus/${dataType}`}>Uranus</Link>
				</div>
				<div className="header__plegable__item">
					<div style={{ backgroundColor: planetColor.neptune }}></div>
					<Link to={`/planets/neptune/${dataType}`}>Neptune</Link>
				</div>
			</section>
		</Styles>
	);
};

export default Header;
