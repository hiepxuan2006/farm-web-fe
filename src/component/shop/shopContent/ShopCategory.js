import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductCategory } from '../../../store/action/categoryAction';
import ShopContent from './ShopContent';
import ShopHeader from './ShopHeader';

function ShopCategory(props) {
    const slug = useParams()
    console.log(slug);
    const dispatch = useDispatch()
    const products = useSelector((state) => state.categoryReducer.productCategory)
    useEffect(() => {
        const getProduct = () => {
            dispatch(getProductCategory(slug.category))
        }
        getProduct()
    }, [dispatch, slug])
    console.log(products);
    return (
        <div>
            <ShopHeader />
            <ShopContent products={products} />
        </div>
    );
}

export default ShopCategory;