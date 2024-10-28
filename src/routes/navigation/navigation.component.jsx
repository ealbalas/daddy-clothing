import { Outlet, Link } from 'react-router-dom';
import { Fragment} from 'react';
import { ReactComponent as DaddyLogo } from '../../assests/daddy.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <DaddyLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
}

export default Navigation;