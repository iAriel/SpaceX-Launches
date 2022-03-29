import React from 'react'
import Logo from '../../assets/logo/SpaceX-logo.svg'
import { Container } from './style'
export function Header(){
    return(
        <Container>
            <img data-testid="logo-svg" src={Logo} alt="logo company" />
        </Container>
    )
}