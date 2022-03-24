import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: var(--light);
        text-align: center;
        font-weight: 500;
        margin-top: 2rem;
        margin-bottom: 7rem;
    }

    
    .loading{
        color: var(--light)
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    
    gap: 1rem;

`