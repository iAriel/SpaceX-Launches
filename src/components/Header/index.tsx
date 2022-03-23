import Logo from '../../assets/logo/SpaceX-logo.svg'
import { Container } from './style'
export function Header(){
    return(
        <Container>
            <img src={Logo} alt="logo company" />
        </Container>
    )
}