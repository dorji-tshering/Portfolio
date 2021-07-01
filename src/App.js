import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes } from './router/config';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [active, setActive] = useState(true);

	useEffect(() => {
		window.onscroll = () => {
			setActive(true);
		}
	},[]);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Header setActive={setActive} active={active}/>
			<section className={active ? "section-active" : "section-inactive"}>
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
