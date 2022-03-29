import React, { createContext, useState } from 'react'

type favoriteState = {
    mission_name: string;
    flight_number: number;
    rocket:{
        rocket_name: string;
    };
    launch_success: boolean; 
    launch_year: number;
    flight_id: string;
    links: {
        mission_patch_small: string;
    };
}

type PropsFavoritesContext = {
    favorite: favoriteState[];
    setFavorite: (newState: favoriteState[]) => void
}

const InitialValueFavorites: PropsFavoritesContext = {
    favorite: [{
        mission_name: "",
        flight_number: 0,
        rocket:{
            rocket_name: "",
        },
        launch_success: false, 
        launch_year: 0,
        flight_id: '',
        links: {
            mission_patch_small: "",
        }
    }],
    setFavorite: () => {},

}

export const FavoriteContext = createContext<PropsFavoritesContext>(InitialValueFavorites);

export const FavoriteContextProvider: React.FC = ({children}) =>{
    const [favorite, setFavorite] = useState(InitialValueFavorites.favorite);
    return(
        <FavoriteContext.Provider value={{favorite, setFavorite}}>
            {children}
        </FavoriteContext.Provider>
    );
}