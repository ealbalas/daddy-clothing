import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';  
import ProductCard from '../../components/product-card/product-card.component';
// import Spinner from '../../components/spinner/spinner.component';
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setProducts(categoriesMap[category]);
        setIsLoading(false);
    }, [category, categoriesMap]);
    
    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products &&
                    products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
        </Fragment>
    )
}

export default Category;