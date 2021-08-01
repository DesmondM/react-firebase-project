import React from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {
    return (
     <header className= {classes.header}>
     <div className={classes.logo}>SA Meetups
     <nav><ul><li>
         <Link to='/'>All Meetups</Link>
         </li>
         <li>
         <Link to='/new-meetup'>New Meetup</Link>
         </li>
         <li>
         <Link to='/favourite'>Favorites</Link>
         </li>
         </ul></nav>
         </div>
        </header>
    )
}

export default MainNavigation;
