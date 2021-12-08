import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/header.component';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { GlobalStyle } from './global.styles';
import Spinner from './Components/Spinner/spinner.component';
import ErrorBoundary from './Components/ErrorBoundary/errorBoundary.component';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [currentUser])

  const HomePage = lazy(() => import('./Pages/HomePage/homepage.component'));
  const ShopPage = lazy(() => import('./Pages/Shop/shop.component'));
  const SignInAndSignUpPage = lazy(() => import('./Pages/SignInAndSignUp/signInAndSignUp.component'));
  const CheckoutPage = lazy(() => import('./Pages/Checkout/checkout.component'));

  return (
    <div className="App">
      <GlobalStyle />
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
          </Suspense>
        </ErrorBoundary>
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