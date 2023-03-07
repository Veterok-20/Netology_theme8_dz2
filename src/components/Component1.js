import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Component1() {            
    const mas = useJsonFetch(process.env.REACT_APP_DATA_URL);        
    console.log(mas);
    let forview= JSON.stringify(mas[0]);     
    return (
        <div>
        {forview}                
        </div>
    )
}