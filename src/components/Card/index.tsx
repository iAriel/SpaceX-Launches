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
            {image ? <img src={image} alt="Rocket"/> : <span className='no-image'>No image</span>}
            <Details>
                <p className="mission-name">{missionName} </p>
                <p className="mission-year">{missionYear} </p>
                <p className="rocket-name">{rocketName} </p>
                <p className="launch-number">{launchNumber}</p>
                <p className='status'><span className={`${launchSuccess}`}> </span></p>
            </Details>
        </Container>
    );
}