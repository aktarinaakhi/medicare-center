import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (

    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route>

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
