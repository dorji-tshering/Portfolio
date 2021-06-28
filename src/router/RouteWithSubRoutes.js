import { Route} from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
    return (
        <Route 
            path={route.path}
            exact={route.exact}
            render={(props) => (
                <route.component {...props} routes={route.routes} key={Date.now()}/>
            )}
        />
    );
}

export default RouteWithSubRoutes;
