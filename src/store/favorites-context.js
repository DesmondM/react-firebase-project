import {createContext} from 'react';
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteMeetup) =>{},
    removeFavorite: (meetupId) =>{},
    itemIsFavorite: (meetupId)=>{}
});

function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites)=>{
            return prevUserFavorites.filter(meetup => meetup.id !==meetupId);
        }
    }
}