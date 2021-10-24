import React, { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import Shop from './Pages/Shop/shop.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/signInAndSignUp.component';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './Pages/Checkout/checkout.component';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [currentUser])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop}/>
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)}/>
        <Route exact path='/checkout' component={Checkout}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);