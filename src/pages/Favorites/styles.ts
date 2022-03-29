import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    

    h1{
        margin-bottom: 3rem;
        color: var(--light);
    }
`

export const FavoriteList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 1rem;
`