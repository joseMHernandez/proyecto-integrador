import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Navbar.module.css'


const Nav = ({onSearch}) => {

   
 return(
    <>
    
    
    <div className={style.nav}>
    <Link  to='/home'>
        <button>HOME</button>
    </Link>
    
    
    <Link to='/about'>
        <button>ABOUT</button>
    </Link>
    
    <Link to="/favorites">
       <button>FAVORITES</button>
        </Link>

    <SearchBar onSearch={onSearch} />
       
      
    </div>  
       
    </>
      
    )
}


export default Nav 