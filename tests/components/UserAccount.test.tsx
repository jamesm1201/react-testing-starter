import UserAccount from '../../src/components/UserAccount';
import { render, screen } from '@testing-library/react';
import { User } from '../../src/entities';

describe('UserAccount', () => { 
    it('should render user name', () => {
        //Make a user object
        const user: User = {id: 1, name: 'james'};
        
        render(<UserAccount user={user}/>);

        //do not need to make it const as only used once
        expect(screen.getByText(user.name)).toBeInTheDocument();
    })

    it('should render edit button when user is admin', () => {
        //User object where isAdmin is true
        const user: User = {id: 1, name: 'james', isAdmin: true};

        render(<UserAccount user={user}/>);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    })

    it('should not render edit button when user is not admin', () => {
        const user: User = {id: 1, name: 'james', isAdmin: false};

        render(<UserAccount user={user}/>);

        //can't use getByRole because it should not be in the DOM
        const button = screen.queryByRole('button');

        expect(button).not.toBeInTheDocument();
    })
 })
