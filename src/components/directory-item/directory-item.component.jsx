import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ title, id, imageUrl, routeName }) => {
    const navigate = useNavigate();
    
    const onNavigateHandler = () => {
        navigate(`/${routeName}`);
    };
    
    return (
        <div className='directory-item-container' key={id} onClick={onNavigateHandler}>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='body'>
              <h2>{title}</h2>
              <p>Shop Now!</p>
            </div>
        </div>
    );
};

export default DirectoryItem;