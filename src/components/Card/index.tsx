import { Container, Details } from "./styles";
import React from 'react'
import AOS from 'aos';
import { useEffect, useContext } from "react";

import {FavoriteContext} from '../../context/favoriteContext'

interface CardProps {
    missionName: string;
    missionYear: number;
    launchNumber: number;
    launchSuccess: boolean; 
    rocketName: string;
    image: string;
}

export function Card({missionName, missionYear, launchNumber, launchSuccess, rocketName, image}: CardProps){
    const {setFavorite, favorite} = useContext(FavoriteContext);

    useEffect(() => {
        AOS.init()
    }, [])

   const addFavorite = () => {
       setFavorite([...favorite,{
        mission_name: missionName,
        flight_number: launchNumber,
        rocket:{
            rocket_name: rocketName,
        },
        launch_success: launchSuccess, 
        launch_year: missionYear,
        flight_id: missionName,
        links: {
            mission_patch_small: image,
        },
       }])
    }
    
    return(
        <Container data-aos="zoom-in">
            {image ? <img src={image} alt="Rocket"/> : <span className='no-image'>No image</span>}
            <Details>
                <p className="mission-name">{missionName} </p>
                <p className="mission-year">{missionYear} </p>
                <p className="rocket-name">{rocketName} </p>
                <p className="launch-number">{launchNumber}</p>
                <aside>
                    <p className='status'><span className={`${launchSuccess}`}> </span></p>
                    <button onClick={addFavorite}>Favorite</button>
                </aside>
            </Details>
        </Container>
    );
}