import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( {setcategories} ) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmir = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 0){
            setcategories( c => [inputValue]);
            // setcategories( c => [inputValue,...c]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit= { handleSubmir }>
            <input  
            type="text" 
            value={inputValue}
            onChange= { handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
