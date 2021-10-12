import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import Shop from './Pages/Shop/shop.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/signInAndSignUp.component';
import auth from './firebase/firebase.utils'; 
import { createUserProfileDocument, addCollectionAndItems } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser} from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './Pages/Checkout/checkout.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        onSnapshot(userRef, snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndItems('collections', collectionsArray.map(({ title, items }) => ({ title, items })));
    }, error => console.log(error));
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={Shop}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)}/>
          <Route exact path='/checkout' component={Checkout}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);