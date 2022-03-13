import React from 'react';
import Slider from '../slider/Slider';
import Category from './category/Category';
import Commit from './commit/Commit';
import Cooperate from './cooperate/Cooperate';
import Post from './post/Post';
import Product from './product/Product';
import Sales from './sales/Sales';
import Header from '../header/Header'
function Home(props) {
    return (
        <div>
            {/* <Header /> */}
            <Slider />
            <Category />
            <Sales />
            <Product />
            <Cooperate />
            <Post />
            <Commit />
        </div>
    );
}

export default Home;