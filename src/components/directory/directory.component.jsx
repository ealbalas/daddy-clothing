import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({categories}) => {
    return (
        <div className='directory-container'>
            {categories.map(({ title, id, imageUrl, routeName }) => {
                return (
                    <DirectoryItem 
                        key={id} 
                        title={title} 
                        imageUrl={imageUrl} 
                        routeName={routeName}
                    />
                );
            })}
        </div>
    );
}

export default Directory;