import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Planets from './views/Planets';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					exact
					path="/planets/:planetName/:dataType"
					element={<Planets />}
				/>
				<Route path="*" element={<Navigate to="/planets/earth/overview" />} />
			</Routes>
		</div>
	);
}

export default App;
