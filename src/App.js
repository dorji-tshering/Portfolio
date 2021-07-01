import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes } from './router/config';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import { useState } from 'react';
import './App.css';

function App() {
	const [active, setActive] = useState(true);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Header setActive={setActive}/>
			<section className={active ? "section-active" : "section-inactive"}
				onScroll={() => setActive(true)}>
				<Switch>
					{Routes.map((route, i) => 
						<RouteWithSubRoutes key={i} {...route}/>
					)}
				</Switch>			
			<Footer/>
			</section>
		</BrowserRouter>
	);
}

export default App;
