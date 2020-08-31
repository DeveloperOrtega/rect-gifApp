import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {
    
    const [inputValue, setinputValue] = useState('');
    
    
    
    const handleInputChange = (e) => {
   
    setinputValue(e.target.value);


    }


    const handleSubmit = (e) => {
    e.preventDefault();

if(inputValue.trim().length >2){

    setcategories(cast => [ inputValue, ...cast,]);
    setinputValue('');
}


    
    

}



    return (
        <form onSubmit={handleSubmit}>
           
        <input
        type="text"
        value ={inputValue}
        onChange={ handleInputChange}
        
        ></input>


        </form>
    )
}




// AddCategory.PropTypes ={
//     setcategories: PropTypes.func.isRequired
// }