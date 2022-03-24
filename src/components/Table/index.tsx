import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { api } from "../../services/api";
import { Card } from "../Card";
import { Container, Content } from "./styles";

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

export function Table() {
    const [pastLaunches, setPastLaunches] = useState<CardPropsState[]>([])
    // const [upcomingLaunches, setUpcomingLaunches] = useState([])

    function Spinner(){
        return(
            <>
                <CircleLoader color={'#FFFFFF'}/>
                <p className='loading'>loading</p>
            </>
        );
    }

    useEffect(()=> {
        api.get('/past')
        .then(response => setPastLaunches(response.data))
    }, [])
    console.log(pastLaunches[0])

    return(
        <Container>
            <h1>Launches</h1>
            {pastLaunches.length === 0 ? Spinner() : null}
        <Content>
            {pastLaunches.map(pastLaunche => {
                return(
                    <Card 
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
        </Content>
        </Container>
    )
}