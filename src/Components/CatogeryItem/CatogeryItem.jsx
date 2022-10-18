import React from 'react';
import './style.css'
const CatogeryItem = ({item}) => {
    return (
        <div className="cat-container">
            <img src={item.img} alt={item.title}/>
            <div className="cat-info">
                <div className="cat-title">{item.title}</div>
                <button>SHOP NOW</button>
            </div>
        </div>
    );
}

export default CatogeryItem;
