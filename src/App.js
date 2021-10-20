import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from "./pages/Home"
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';


function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute exact path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <PrivateRoute exact path="/contact">
            <Contact></Contact>
          </PrivateRoute>

          <PrivateRoute exact path="/faq">
            <Faq></Faq>
          </PrivateRoute>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
