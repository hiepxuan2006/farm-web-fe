import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../store/action/categoryAction';
import ShopContent from './ShopContent';
import ShopHeader from './ShopHeader';

function ShopHome(props) {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.categoryReducer.product)
    useEffect(() => {
        const getProduct = () => {
            dispatch(getAllProduct())
        }
        getProduct()
    }, [dispatch])
    return (
        <div>
            <ShopHeader />
            <ShopContent products={products} />
        </div>
    );
}

export default ShopHome;