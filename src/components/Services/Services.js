import React from 'react';
import './Services.css'
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Services = () => {
    const data = useLoaderData()

    // console.log(data.categories.forEach(category => category.strCategory))
    console.log(data.categories)

    const CG = data.categories

    return (
        <div>
           <h1>Here Some food : {CG.length}</h1>

                <div className='serve'>

                {
                    CG.map( categories => <Categories categories={categories}></Categories>)
                }
                </div>
            
        </div>
    );
};

export default Services;