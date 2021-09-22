import { Route, Redirect } from "react-router-dom";
function ProtectedRout({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login"/>
      }
    />
  );
}

export default ProtectedRout;
