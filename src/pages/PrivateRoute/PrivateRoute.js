import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router'
import useAuth from '../../components/hooks/useAuth'
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
        <Spinner animation="border" variant="primary" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />

            }
        >

        </Route>
    );
};

export default PrivateRoute;