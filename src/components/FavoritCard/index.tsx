import { Container, Details } from "./styles";
import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect} from "react";

interface CardProps {
    missionName: string;
    missionYear: number;
    launchNumber: number;
    launchSuccess: boolean; 
    rocketName: string;
    image: string;
}

export function FavoriteCard({missionName, missionYear, launchNumber, launchSuccess, rocketName, image}: CardProps){
    useEffect(() => {
        AOS.init()
    }, [])
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
                </aside>
            </Details>
        </Container>
    );
}