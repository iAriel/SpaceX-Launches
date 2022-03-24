import { Container, Details } from "./styles";

interface CardProps {
    missionName: string;
    missionYear: number;
    launchNumber: number;
    launchSuccess: boolean; 
    rocketName: string;
    image: string;
}

export function Card({missionName, missionYear, launchNumber, launchSuccess,rocketName, image}: CardProps){
    return(
        <Container>
            <img src={image} alt="foguete"/>
            <Details>
                <p className="mission-name">Name: {missionName} </p>
                <p className="mission-year">Year: {missionYear} </p>
                <p className="rocket-name"> Rocket: {rocketName} </p>
                <p className="launch-number">Launch Number: {launchNumber}</p>
                <p className='status'>Success: <span className={`${launchSuccess}`}> </span></p>
            </Details>
        </Container>
    );
}