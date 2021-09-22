import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ component: Component, isLoggein, ...rest }) {
    return <Route {...rest}
        render={(props) =>
            isLoggein ? <Component{...props} /> : <Redirect to="./Login" />
        } />
}


export default ProtectedRoute