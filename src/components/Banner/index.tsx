import React from 'react'
import { Link } from "react-router-dom";
import { Container, Content } from "./styles";

import AOS from 'aos';
import { useEffect } from "react";

export function Banner(){
    useEffect(()=>{
        AOS.init()
    }, [])
    return(
        <Container>
            <Content>
                <h1 data-aos="fade-right" data-aos-duration="2500">Discover all our launches</h1>
                <Link to="/discover"> Discover</Link>
            </Content>
        </Container>
    )
}