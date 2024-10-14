import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';
import { debug } from 'console';
import '@testing-library/jest-dom/vitest'

describe('Greet', () => {
    it('should render hello with name when provided', () =>{
        render(<Greet name="James" />);

        //Grabs heading element (h1)
        const heading = screen.getByRole('heading');
        
        expect(heading).toBeInTheDocument();

        //Uses regex (i means case insensitive)
        expect(heading).toHaveTextContent(/hello james/i);
    })

    it('should render login button when name not provided', () =>{
        render(<Greet />);

        //Grabs button element
        const button = screen.getByRole('button');
        
        expect(button).toBeInTheDocument();

        //Uses regex (i means case insensitive)
        expect(button).toHaveTextContent(/login/i);
    })
})