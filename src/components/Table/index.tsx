import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Table() {
    useEffect(()=> {
        api.get('/past')
        .then(response => console.log(response.data))
    }, [])
    return(
        <Container>
            <h1>Launches</h1>
        </Container>
    )
}