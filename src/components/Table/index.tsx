import { useState } from "react";
import { CircleLoader } from "react-spinners";
import { UpcomingLaunches } from "../OutcomingLaunches";
import { PastLaunches } from "../PastLaunches";
import { Container, Content, ButtonContainer } from "./styles";

export function Table() {
    
    const [handleRender, setHandleRender] = useState(false);

    function handleShowPastLaunches(){
        setHandleRender(false)
    }
    function handleShowUpcomingLaunches(){
        setHandleRender(true)
    }
    return(
        <Container>
            <h1>Launches</h1>
            <ButtonContainer>
                <button onClick={handleShowPastLaunches}>Past launches</button>
                <button onClick={handleShowUpcomingLaunches}>Upcoming launches</button>
            </ButtonContainer>
        <Content>
            {!handleRender ? 
                <PastLaunches/>
                :
                <UpcomingLaunches/>
            }
        </Content>
        </Container>
    )
}