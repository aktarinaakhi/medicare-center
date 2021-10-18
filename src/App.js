import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import Services from './pages/Services'
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Doctor from './pages/OurTeam';


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

          <Route exact path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>

          {/* <Route exact path="/doctor">
            <Doctor></Doctor>
          </Route> */}

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
