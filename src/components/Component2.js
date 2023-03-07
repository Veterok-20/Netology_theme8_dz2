import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Component2() {    
    // const [{data, loading, error}] = useJsonFetch(process.env.REACT_APP_ERROR_URL);
    const mas = useJsonFetch(process.env.REACT_APP_ERROR_URL);
   
    return (
        // <div style={{width: "300px", hieght: "100px"}}>
        <div>
        {mas[2].message}                  
        </div>
    )
}