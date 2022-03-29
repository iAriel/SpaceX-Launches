import React from 'react'
import { CircleLoader } from "react-spinners";
import { Container } from "./styles";

export function Spinner(){
    return(
        <Container>
            <CircleLoader color={'#FFFFFF'}/>
            <p className='loading'>loading</p>
        </Container>
    );
}