import React from 'react';
import {render, screen} from '@testing-library/react'
import {FavoritePage} from './index';

describe('Favorite Component', () =>{
    it('should render favorite without cards', () => {
        render(<FavoritePage/>)
        const favoriteDisplay = screen.getByText('Not Favorites')

        expect(favoriteDisplay).toBeInTheDocument()
    })
})