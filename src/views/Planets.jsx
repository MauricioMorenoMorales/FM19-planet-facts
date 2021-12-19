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
	console.log(textData);
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
							src={window.location.origin + filteredData.images.geology}
							alt=""
						/>
					)}
				</figure>
				<section className="main__description">
					<div className="main__description__text">
						<h1 className="main__description__title">{filteredData.name}</h1>
						<p>{textData.content}</p>
						<span>Source</span>
						<a href={textData.source}>Wikipedia</a>
					</div>
					<div className="main__description__links">
						<div className="main__description__links__item">
							<small>01</small>
							<p>Overview</p>
						</div>
						<div className="main__description__links__item">
							<small>02</small>
							<p>Internal structure</p>
						</div>
						<div className="main__description__links__item">
							<small>03</small>
							<p>Surface Geology</p>
						</div>
					</div>
				</section>
			</article>
			<article className="stats">
				<div className="stat__item">
					<h6>Rotation Time</h6>
					<h3>{filteredData.rotation}</h3>
				</div>
				<div className="stat__item">
					<h6>Revolution Time</h6>
					<h3>{filteredData.revolution}</h3>
				</div>
				<div className="stat__item">
					<h6>Radius</h6>
					<h3>{filteredData.radius}</h3>
				</div>
				<div className="stat__item">
					<h6>Average Temp</h6>
					<h3>{filteredData.temperature}</h3>
				</div>
			</article>
		</Styles>
	);
};

export default Planets;
