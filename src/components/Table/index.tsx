import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { UpcomingLaunches } from "../OutcomingLaunches";
import { PastLaunches } from "../PastLaunches";
import { Container, Content, ButtonContainer, FilterContainer } from "./styles";

import AOS from 'aos';
import 'aos/dist/aos.css';

type FormData = {
    launch_year: number,
    launch_success: string, 
}


export function Table() {
    
    const [handleRender, setHandleRender] = useState(false);
    const [filter, setFilter] = useState({
        launch_year: 0,
        launch_success: 'true', 
    });
    const {register, handleSubmit} = useForm<FormData>()

    function handleShowPastLaunches(){
        setHandleRender(false)
    }
    function handleShowUpcomingLaunches(){
        setHandleRender(true)
    }

    useEffect(() => {
        AOS.init()
    }, [])

    function filterSubmit(data: FormData){
        setFilter(data)
    }

    return(
        <Container>
            <ButtonContainer>
                <h1>Launches</h1>
                <div>
                    <button onClick={handleShowPastLaunches}>Past launches</button>
                    <button onClick={handleShowUpcomingLaunches}>Upcoming launches</button>
                    <p>Filter</p>
                </div>
            </ButtonContainer>
            <FilterContainer onSubmit={handleSubmit(filterSubmit)}>
                <input {...register("launch_year")} type="number" placeholder="Launche year"/>
                <div>
                    <select {...register("launch_success")}id="success">
                        <option>All</option>
                        <option>Success</option>
                        <option>Falied</option> 
                    </select>
                </div>
                <button type="submit">Aply</button>
                
            </FilterContainer>
            {!handleRender ? 
                <h2 data-aos="zoom-in">Past launches</h2> 
                : 
                <h2>Upcoming launches</h2>
            }
        <Content>
            {!handleRender ? 
                
                <PastLaunches isRendering={handleRender} filterLaunche={filter}/>
                :
                <UpcomingLaunches isRendering={handleRender} filterLaunche={filter}/>
            }
                
        </Content>
        </Container>
    )
}