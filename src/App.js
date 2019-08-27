import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Lista from './view/Lista';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/"component={Lista}	/>
				
			</Switch>
		</BrowserRouter>
	);
}

export default App;
