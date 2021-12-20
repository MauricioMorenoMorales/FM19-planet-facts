import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Styles } from './Header.styles';
import { planetColor } from '../../tokens.styles';
import BurgerIcon from '../../assets/icon-hamburger.svg';

const Header = () => {
	const { planetName, dataType } = useParams();
	const navigate = useNavigate();
	const [plegableOpened, setPlegableOpened] = useState(true);
	const changePlanet = planet => {
		navigate(`/planets/${planet}/${dataType}`);
		setPlegableOpened(false);
	};
	return (
		<Styles accent={planetColor[planetName]}>
			<section className={`header__name ${plegableOpened && 'opened'}`}>
				<h1>THE PLANETS</h1>
				<img
					onClick={() => setPlegableOpened(!plegableOpened)}
					src={BurgerIcon}
					alt=""
				/>
			</section>
			<section className="header__themes">
				<Link
					className={`${dataType === 'overview' && 'active'}`}
					to={`/planets/${planetName}/overview`}
				>
					Overview
				</Link>
				<Link
					className={`${dataType === 'structure' && 'active'}`}
					to={`/planets/${planetName}/structure`}
				>
					Structure
				</Link>
				<Link
					className={`${dataType === 'geology' && 'active'}`}
					to={`/planets/${planetName}/geology`}
				>
					Geology
				</Link>
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
				<div
					className="header__plegable__item"
					onClick={() => changePlanet('mercury')}
				>
					<div style={{ backgroundColor: planetColor.mercury }}></div>
					<p>Mercury</p>
				</div>
				<div
					className="header__plegable__item"
					onClick={() => changePlanet('venus')}
				>
					<div style={{ backgroundColor: planetColor.venus }}></div>
					<p>Venus</p>
				</div>
				<div
					className="header__plegable__item"
					onClick={() => changePlanet('earth')}
				>
					<div style={{ backgroundColor: planetColor.earth }}></div>
					<p>Earth</p>
				</div>
				<div
					className="header__plegable__item"
					onClick={() => changePlanet('mars')}
				>
					<div style={{ backgroundColor: planetColor.mars }}></div>
					<p>Mars</p>
				</div>
				<div
					className="header__plegable__item"
					onClick={() => changePlanet('jupiter')}
				>
					<div style={{ backgroundColor: planetColor.jupiter }}></div>
					<p>Jupiter</p>
				</div>
				<div
					className="header__plegable__item"
					onClick={() => changePlanet('saturn')}
				>
					<div style={{ backgroundColor: planetColor.saturn }}></div>
					<p>Saturn</p>
				</div>
				<div
					className="header__plegable__item"
					onClick={() => changePlanet('uranus')}
				>
					<div style={{ backgroundColor: planetColor.uranus }}></div>
					<p>Uranus</p>
				</div>
				<div
					className="header__plegable__item"
					onClick={() => changePlanet('neptune')}
				>
					<div style={{ backgroundColor: planetColor.neptune }}></div>
					<p>Neptune</p>
				</div>
			</section>
		</Styles>
	);
};

export default Header;
