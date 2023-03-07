import {useState, useEffect} from 'react';

export default function useJsonFetch(url) {
const [data, SetData] = useState([]);
const [error, SetError] = useState({
    name: '',
    message: ''
})
const [loading, SetLoading] = useState(false);  

useEffect(()=> {
    async function FetchData(){        
        SetLoading(true); 
       try {        
        const response = await fetch(url);       
        if (!response.ok) {throw new Error(response.statusText)}       
        const data = await response.json();               
        SetData(data);
       }
       catch (e){      
        SetError(e)
    } 
       finally {SetLoading(false)} 
    }
    FetchData();    
}, [])
return [data, loading, error];
}  