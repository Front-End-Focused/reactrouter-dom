import { Route, Redirect } from "react-router-dom";

function ProgectdRouter({ component: Component, isLoggeIn, ...rest }) {
    return (
        <Route  {...rest}
            render={(props) => isLoggeIn ? (
                <Component {...props} />
            ) : <Redirect to="/login" />} />
    )
}

export default ProgectdRouter