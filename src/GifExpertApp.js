import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['javaScript']);


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={ setcategories }/>
            <hr/>
            <ol>
                {
                    categories.map( c => 
                        
                        <GifGrid 
                            key= {c}
                            category = {c}
                        />
                    )
                }
            </ol>
        </div>
    )
}
