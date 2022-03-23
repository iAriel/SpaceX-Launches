import { Link } from "react-router-dom";
import { Container, Content } from "./styles";

export function Banner(){
    return(
        <Container>
            <Content>
                <h1>Discover all our launches</h1>
                <Link to="/discover"> Discover</Link>
            </Content>
        </Container>
    )
}