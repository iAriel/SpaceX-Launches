import React, { useContext } from "react";
import { FavoriteCard } from "../../components/FavoritCard";
import {FavoriteContext} from '../../context/favoriteContext' 
import { Container, FavoriteList } from "./styles";

export function FavoritePage(){
    const {favorite} = useContext(FavoriteContext)
    return(
        <Container>
        <h1>Favorites</h1>
        
        {favorite.length === 0 || <h1>Not Favorites</h1>}
        <FavoriteList>
        {favorite.map(favorites =>{
            if(favorites.launch_year === 0){
                return null
            }
            return(
                <FavoriteCard 
                    key={favorites.mission_name}
                    missionName={favorites.mission_name}
                    missionYear={favorites.launch_year}
                    launchNumber={favorites.flight_number}
                    launchSuccess={favorites.launch_success}
                    rocketName={favorites.rocket.rocket_name}
                    image={favorites.links.mission_patch_small}
                />
            )
        })}
        </FavoriteList>
        </Container>
    )
}