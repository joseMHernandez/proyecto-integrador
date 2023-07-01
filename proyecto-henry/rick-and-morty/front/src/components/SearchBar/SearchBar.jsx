import { useState } from 'react';
//import styles from './searchbar.module.css'



export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handlechange = (e) => {
      setId(e.target.value)
   }
  
   return (
      <div>
         <input name='user' type='search' onChange={handlechange} />
         <button   onClick={() => {onSearch(id)}}>Agregar🔍</button>
      </div>
 
  );
}
