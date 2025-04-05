import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as DaddyLogo } from '../../assets/daddy.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'; 
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import './navigation.styles.scss';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    );
}

export default Navigation;