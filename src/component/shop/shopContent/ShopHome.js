import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, getAllProductPage } from '../../../store/action/categoryAction';
import ShopContent from './ShopContent';
import ShopHeader from './ShopHeader';

function ShopHome(props) {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.categoryReducer.productPage)
    const totalPage = useSelector((state) => state.categoryReducer.totalPage)
    const [page, setPage] = useState(1)
    useEffect(() => {
        const getProduct = async () => {
            try {
                const results = await dispatch(getAllProductPage(page))
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [dispatch, page])
    console.log('page', page);
    console.log(totalPage);
    return (
        <div>
            <ShopHeader />
            <ShopContent products={products} totalPage={totalPage} setPage={setPage} page={page} />
        </div>
    );
}

export default ShopHome;