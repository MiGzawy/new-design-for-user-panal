import React from 'react';
import {categories }from '../../assists/Data/Data'
import CatogeryItem from '../CatogeryItem/CatogeryItem'
import './style.css'
const Catogery = () => {
    return (
        <div className="cats-cont">
            {
                categories.map(item=>(
                    <CatogeryItem item={item} key={item.id}/>
                ))
            }
        </div>
    );
}

export default Catogery;
