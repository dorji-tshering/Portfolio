import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import { Routes } from './router/config';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';

function App() {
	return (
		<BrowserRouter>
			<Header/>
			<Switch>
				{Routes.map((route, i) => 
					<RouteWithSubRoutes key={i} {...route}/>
				)}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
