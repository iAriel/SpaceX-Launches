import styled from 'styled-components'

export const Container = styled.div`
    color: var(--light-gray);
    display: flex;
    flex-direction: column;
    width: 25rem;
    
    background-color: var(--light);
    
    border-radius: 0.31rem;
    border: 0.06rem solid var(--light);

    img, .no-image{ 
        border-bottom: none;
        padding: 1rem;
        width: 23.31rem;
        height: 27.31rem;
    }
`

export const Details = styled.div`
    width: 25rem;
    border-radius: 0 0 0.31rem 0.31rem;
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:before{
            content: 'Name: ';
            font-weight: 600;
        }
    }
    .mission-year:before{
        content: 'Year: ';
        font-weight: 600;
    }

    .rocket-name:before{
        content: 'Rocket: ';
        font-weight: 600;
    }

    .launch-number:before{
        content: 'Launches number: ';
        font-weight: 600;
    }

    .status:before{
        content: 'Success: ';
        font-weight: 600;
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

    aside{
        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;

        button{
            margin-right: 1rem;
            margin-bottom: 0.6rem;
            padding: 0.2rem 0.5rem;
        }
    }
`