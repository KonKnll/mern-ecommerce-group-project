import { Route, Switch } from 'react-router-dom';
import { useContext } from 'react';

import Home from '../../views/Home';
import AdminDashboard from '../../views/AdminDashboard';
import CategoriesView from '../../views/CategoriesView';
import ProductView from '../../views/ProductView';
import Login from '../../views/Login';
import Register from '../../views/Register';
import Contact from '../../views/Contact';
import About from '../../views/About';
import Missing404 from '../../views/Missing404';
import CartView from '../../views/CartView';
import ChatView from '../../views/ChatView';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ProtectedRoute from './ProtectedRoute';

import { UserContext } from '../../context/UserContext';

const Routing = () => {
  const { user, enter } = useContext(UserContext);

  console.log('Routing - user ::: ', user);
  console.log('Routing - enter :::', enter);

  const adminView = !enter.startsWith('admin', 22);

  return (
    <>
      {adminView && <Header />}
      <main>
        <Switch>
          {/* views */}
          <Route path={['/', '/home']} exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/categories/" exact component={CategoriesView} />
          {/* <Route path="/categories/:name" component={CategoriesView} /> */}

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <ProtectedRoute
            path="/admin/dashboard"
            auth={user.isAdmin}
            login={user.login}
            component={AdminDashboard}
          />

          {/* ------------------------------- */}

          <Route path="/cart" exact component={CartView} />
          {/* <Route path="/cart/checkout" component={Checkout} /> */}
          {/* <Route path="/checkout" component={ } /> */}

          <Route path="/chat" component={ChatView} />

          <Route path="/product/:slug" component={ProductView} />

          <Route path="*" component={Missing404} />
        </Switch>
      </main>
      {adminView && <Footer />}
    </>
  );
};

export default Routing;
