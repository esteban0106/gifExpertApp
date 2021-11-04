import React/* , { useEffect, useState } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category }) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs(category);
    
    // useEffect(() => {
    //     getGifs(category)
    //         .then( imgs => setImages ( imgs ));        
    //         // .then(setImages);  Es lo mismo de la linea de arriba
    // }, [ category ])


    return (
        <>
        <h2> { category } </h2>

        {loading && <p>Loading...</p>}

        <div className="card-grid animate__flash">
                {
                    images.map ( img => (

                        <GifGridItem 
                            key= {img.id}
                            {...img}
                        />
                    ))
                }
        </div>
        </>
    )
}


