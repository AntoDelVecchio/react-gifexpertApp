import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'


export const GifGrid = ( { category } ) => {
    
    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h2 className="title">{ category }</h2>

            { loading && <p className="title animate__animated animate__flash">Loading... 🔍</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img }
                        />
                    ))
                }
            </div>
        </>
    );
}













// const [images, setImages] = useState([]);

// /* sólo quiero que se ejecute dicha instrucción 
// cuando el componente es renderizado por 1era vez */
// useEffect( () => {

//     getGifs( category )
//         .then( (images) => {
//             setImages( images );
//     })

// }, [ category ]);