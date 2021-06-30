import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes } from './router/config';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Header/>
			<Switch>
				{Routes.map((route, i) => 
					<RouteWithSubRoutes key={i} {...route}/>
				)}
			</Switch>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
