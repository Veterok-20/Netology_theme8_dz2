import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Component3() {    
    const mas = useJsonFetch(process.env.REACT_APP_LOADING_URL);           
    let forview= JSON.stringify(mas[0]);   
   
    return (
        <div>
        {forview}                 
        </div>
    )
}       