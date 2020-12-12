import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './../Styles/App.css';
import  Home from './Home';
import Xplore from './Xplore';
import BookStore from './BookStore'
import Search from './Search'
import BookDetail from './XploreComponents/CardComponents/BookDetail';
import SignIn from './SignIn';


function App() {
  return(
     <Router>
       {/* Home */}

       <Switch>

          <Route exact path={'/'}component={Home} />
          <Route exact path={'/xplore'}component={Xplore} />
          <Route exact path={'/bookstore'}component={BookStore} />
          <Route exact path={'/search'}component={Search} />
          <Route exact path={'/bookdetail/:post_title'} component={BookDetail} />
          <Route exact path={'/signin'} component={SignIn} />
        </Switch>
        
     </Router>
      
  );
}

export default App;
