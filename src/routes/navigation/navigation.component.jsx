import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as DaddyLogo } from '../../assets/daddy.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
import CartIcon from '../../components/cart-icon/cart-icon.component';

const Navigation = () => {
    const  { currentUser } = useContext(UserContext);

    const signOutHandler = async () => {
      await signOutUser();
    }

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <DaddyLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                    ) : (
                      <Link className='nav-link' to='/auth'>SIGN IN</Link>
                  )
                }
                <CartIcon />
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
}

export default Navigation;