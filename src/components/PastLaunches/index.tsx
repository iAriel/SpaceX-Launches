import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../Card";
import { Spinner } from "../Spinner";

type CardPropsState = {
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

export function PastLaunches(){
    const [pastLaunches, setPastLaunches] = useState<CardPropsState[]>([])


    useEffect(()=> {
        api.get('/past')
        .then(response => setPastLaunches(response.data))
    }, [])
    return(
        <>
            {pastLaunches.length !== 0 || <Spinner/>}
            {pastLaunches.map(pastLaunche => {
                return(
                    <Card
                        data-aos="zoom-in" 
                        key={pastLaunche.mission_name}
                        missionName={pastLaunche.mission_name}
                        missionYear={pastLaunche.launch_year}
                        launchNumber={pastLaunche.flight_number}
                        launchSuccess={pastLaunche.launch_success}
                        rocketName={pastLaunche.rocket.rocket_name}
                        image={pastLaunche.links.mission_patch_small}
                    />
                )
            })}
        </>
    )
}