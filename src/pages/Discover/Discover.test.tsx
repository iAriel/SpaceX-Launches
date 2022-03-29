import React from 'react';
import {render, screen} from '@testing-library/react'
import {Discover} from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Favorite Component', () =>{
    it('should render Discover without cards', () => {
        render(
            <BrowserRouter>
                    <Discover/>
            </BrowserRouter>
        )
        const discoverButton = screen.getByText('Launches')

        expect(discoverButton).toBeInTheDocument()
    })
})