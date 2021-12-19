import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Planets from './views/Planets';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<h1>Hola Mundo</h1>} />
				<Route
					exact
					path="/planets/:planetName/:dataType"
					element={<Planets />}
				/>
			</Routes>
		</div>
	);
}

export default App;
