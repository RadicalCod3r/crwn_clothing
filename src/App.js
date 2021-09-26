import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import Shop from './Pages/Shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/signInAndSignUp.component';
import auth from './firebase/firebase.utils'; 

const HatsPage = () => (
  <h1>Hats Page</h1>
);

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
