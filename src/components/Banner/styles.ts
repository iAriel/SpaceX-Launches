import styled from 'styled-components'
import Image from '../../assets/images/banner-desktop.jpg'

export const Container = styled.div`
    color: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;

    background-image: url(${Image});
    width: 100%;
    height: 100vh;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;

    margin-top: -5rem;

    
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        margin-bottom: 8rem;
    }

    a{
        text-decoration: none;
        padding: 1rem 3rem;
        font-size: 1.5rem;
        color: var(--light);

        background: none;
        border: 1px solid var(--light);

        box-shadow: inset 0 0 0 0 var(--light);

        margin-bottom: -10rem;
        transition: ease-out 0.4s;

        &:hover{
            box-shadow: inset 200px 0 0 0 var(--light);
            color: var(--dark)
        }
    }
`