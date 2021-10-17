import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import AuthProvider from './components/context/AuthProvider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Banner></Banner>
        <Switch>
          <Route exact path="/">


          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
