import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ auth, login, component: Component, ...rest }) => {
  console.log(auth, 'Protected Route');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth && !login)
          return (
            <Redirect to={{ path: '/home', state: { from: props.location } }} />
          );
      }}
    />
  );
};

export default ProtectedRoute;
