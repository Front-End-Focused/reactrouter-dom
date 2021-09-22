import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoute({ component: Component, isLoggeIn, ...rest }) {
    return (
        <Route {...rest} render={(props) => isLoggeIn ? <Component {...props} /> : <Redirect to='/Login'/>}
        />
    )
}

export default ProtectedRoute
