import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import Shop from './Pages/Shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/header.component';

const HatsPage = () => (
  <h1>Hats Page</h1>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
