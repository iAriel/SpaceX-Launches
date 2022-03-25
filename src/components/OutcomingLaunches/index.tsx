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
type FilterLaunchProps = {
    launch_year: number,
    launch_success: string, 
}
interface LauncheProps {
    isRendering: boolean;
    filterLaunche: FilterLaunchProps;
}


export function UpcomingLaunches({isRendering, filterLaunche}: LauncheProps){
    const [upcomingLaunches, setUpcomingLaunches] = useState<CardPropsState[]>([])

    useEffect(()=> {
        api.get('/upcoming')
        .then(response => setUpcomingLaunches(response.data))
    }, [])

    useEffect(() =>{
        api.get(`/upcoming?launch_year=${filterLaunche.launch_year}&launch_success${filterLaunche.launch_success}`)
        .then(response => setUpcomingLaunches(response.data))
    }, [filterLaunche])
    return(
        <>
            {upcomingLaunches.length !== 0 || <Spinner />}
            {upcomingLaunches.map(upcomingLaunche => {
                return (
                    <Card
                        data-aos="zoom-in"
                        key={upcomingLaunche.mission_name}
                        missionName={upcomingLaunche.mission_name}
                        missionYear={upcomingLaunche.launch_year}
                        launchNumber={upcomingLaunche.flight_number}
                        launchSuccess={upcomingLaunche.launch_success}
                        rocketName={upcomingLaunche.rocket.rocket_name}
                        image={upcomingLaunche.links.mission_patch_small}
                    />
                )
            })}
        </>
    )
}