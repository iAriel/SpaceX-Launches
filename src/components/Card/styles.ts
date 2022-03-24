import styled from 'styled-components'

export const Container = styled.div`
    color: var(--light-gray);
    display: flex;
    flex-direction: column;
    width: 25rem;
    

    img{ 
        border-radius: 5px 5px 0 0;
        border: 1px solid var(--light);
        border-bottom: none;
        padding: 1rem;
    }
`

export const Details = styled.div`
    width: 25rem;
    border-radius: 0 0 5px 5px;
    background: var(--light);
    border-top:1px solid var(--gray);
    p{
        margin-left: 1rem;
    }
    span{
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        display: inline-block;
        margin-left: 0.5rem;
    }
    .mission-name{
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .status{
        display: flex;
        align-items: center;
    }
    .true{
        background-color: var(--green);
    }

    .false{
        background-color: var(--red);
    }
`