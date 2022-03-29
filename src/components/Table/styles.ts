import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    .loading{
        color: var(--light)
    }

    
    h2{
        color: var(--light);
        text-align: center;
        margin-bottom: 2rem;
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    h1{
        color: var(--light);
        text-align: center;
        font-weight: 500;
        margin-top: 2rem;
        margin-bottom: 3rem;
    }

    p{
        color: var(--light);
        text-align: center;
        margin-top: 2rem;
        font-weight: 300;
        font-size: 0.8rem
    }

    button, .handle-page-favorite{
        width: 13rem;
        height: 4rem;

        box-shadow: inset 0 0 0 0 var(--light);
        background: none;
        color: var(--gray-light);
        border: 0.06rem solid var(--light);
        transition: ease-in-out 0.5s;

        &:hover{
            box-shadow: inset 0 -250px 0 0 var(--light);
            color: var(--dark);
        }

        &:last-child{
            margin-left: 1rem;
        }
    }

    .handle-page-favorite{
        text-decoration: none;
        padding: 1.09rem 4rem 1.3rem 4rem;
        font-size: 1.09rem;
        border-left: none;
        border-right: none;
    }
`

export const FilterContainer = styled.form`
    width: 33%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;
    flex-direction: row;
    align-items: center;
    div{
        display: flex;
        display: flex;
        flex-direction: row;
        align-items: center;
        input{
            margin-left: 1rem;
        }
        
        label{
            color: var(--light);
            margin-left: 0.5rem;
        }
    }

    button{
        background: var(--light);
        color: var(--dark);
        border: 0.06rem solid var(--light);
        padding: 0.1rem 1rem;
        transition: 0.2s;
        margin-left: 1rem;

        &:hover{
            filter:brightness(0.9);
        }
    }
`