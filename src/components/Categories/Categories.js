import React from 'react';
import './Categories.css'

const Categories = ({categories}) => {

    const {idCategory, strCategory, strCategoryDescription, strCategoryThumb} = categories


    return (
        <div className='cate'>
            <img src={strCategoryThumb} alt="" />

            <h4>Name : {strCategory}</h4>
            <p>{strCategoryDescription}</p>
        </div>
    );
};

export default Categories;