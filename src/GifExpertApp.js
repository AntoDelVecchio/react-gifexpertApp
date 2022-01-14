import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState (['Cats']);

    // const handleAddCategory = () => {
    //     setCategories( [...categories, 'Graciosos' ] );
    //     // setCategories( category =>  [...categories, 'Graciosos'] );
    // }


    return (
      <>
        <h1>GifExpertApp 🪀</h1>
        <AddCategory setCategories={ setCategories } />
        <hr />

        <ol>
            { 
                categories.map(category => 
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                )
            }
        </ol>

      </>
    )
}

export default GifExpertApp;