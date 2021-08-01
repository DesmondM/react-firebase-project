import {Route, Switch} from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      
     <Switch>
     <Route path="/" exact={true}> 
      <AllMeetupsPage/>
     </Route>
     <Route path="/new-meetup">
       <NewMeetupPage/>
     </Route>

     <Route path ="/favourite">
       <FavouritesPage/>
     </Route>
     </Switch>
    </Layout>
  );
}

export default App;
