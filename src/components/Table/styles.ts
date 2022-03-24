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
        margin-bottom: 3rem;
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

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 3rem;

    button{
        width: 13rem;
        height: 4rem;

        box-shadow: inset 0 0 0 0 var(--light);
        background: none;
        color: var(--gray-light);
        border: 0.06rem solid var(--light);
        transition: ease-in-out 0.5s;

        &:hover{
            box-shadow: inset 0 -250px 0 0 var(--light);
            color: var(--dark)
        }

        &:last-child{
            margin-left: 1rem;
        }
    }
`