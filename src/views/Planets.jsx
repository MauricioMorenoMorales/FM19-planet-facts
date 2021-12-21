import React from 'react';
import { useParams } from 'react-router-dom';
import { Styles } from './Planets.styles';
import Data from '../data.json';
import { planetColor } from '../tokens.styles.js';
import Header from '../Components/Header/Header';

const Planets = () => {
	const { planetName, dataType } = useParams();
	const filteredData = Data.filter(
		element => element.name.toLowerCase() === planetName.toLowerCase(),
	)[0];
	const imageType = {
		overview: 'planet',
		structure: 'internal',
		geology: 'planet',
	}[dataType];
	const textData = filteredData[dataType];
	return (
		<Styles accent={planetColor[planetName]}>
			<Header />
			<article className="main">
				<figure className="main__image">
					<img
						src={window.location.origin + filteredData.images[imageType]}
						alt=""
					/>
					{dataType === 'geology' && (
						<img
							className="main__image__surface"
							src={window.location.origin + filteredData.images.geology}
							alt=""
						/>
					)}
				</figure>
				<section className="main__description">
					<div className="main__description__text">
						<h2 className="main__description__title">{filteredData.name}</h2>
						<p>{textData.content}</p>
						<span>Source</span>
						<a href={textData.source}>Wikipedia</a>
					</div>
					<div className="main__description__links">
						<div className="main__description__links__item">
							<small>01</small>
							<h4>Overview</h4>
						</div>
						<div className="main__description__links__item">
							<small>02</small>
							<h4>Internal structure</h4>
						</div>
						<div className="main__description__links__item">
							<small>03</small>
							<h4>Surface Geology</h4>
						</div>
					</div>
				</section>
			</article>
			<article className="stats">
				<div className="stats__item">
					<h5>Rotation Time</h5>
					<h3>{filteredData.rotation}</h3>
				</div>
				<div className="stats__item">
					<h5>Revolution Time</h5>
					<h3>{filteredData.revolution}</h3>
				</div>
				<div className="stats__item">
					<h5>Radius</h5>
					<h3>{filteredData.radius}</h3>
				</div>
				<div className="stats__item">
					<h5>Average Temp</h5>
					<h3>{filteredData.temperature}</h3>
				</div>
			</article>
		</Styles>
	);
};

export default Planets;
