//import styles from './card.module.css';
import { Link } from 'react-router-dom';
import style from './Card.module.css'
import {useState, useEffect} from "react"
import {connect} from "react-redux"
import { addFav, removeFav } from "../../redux/actions";


const Card = (props) =>{
   const {name, id, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props; 


 
 const [isFav, setIsFav] = useState(false)

 useEffect(() => {
   console.log(myFavorites)
   myFavorites.forEach((myfav) => {
     console.log(myfav.id, id)
      if (myfav.id === id) {
       
         setIsFav(true);
      }
   });
}, [myFavorites, id]);


const handleFavorite = () => {
   isFav ? removeFav(id) : addFav({id, name,
     species,
     status,
     gender,
     origin,
     image})
     setIsFav(!isFav)
 }


   return (
    


      <div className={style.card}>
          {
          isFav ? (
              <button className={style.fav} onClick={handleFavorite}>❤️</button>
          ) : (
              <button className={style.fav} onClick={handleFavorite}>AddFav</button>
          )
        }
         <button className={style.dismiss} onClick={() => {onClose(id)}}>X</button>
         <div className={style.header}>
         <img src={image} alt='imagen'/>
         </div>
         <h2 >{name}</h2>
         <Link to={`/detail/${id}`} >
         <h3 className="card-name">{name}</h3>
         </Link>
         <div className={style.content}>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         </div>
      </div>
    
   );
}

const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites
   }
 }
 
 const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(addFav(character))
     }, 
     removeFav : (id) => {
       dispatch(removeFav(id))
     }
   }
 }
 // mapStateToProps, mapDispatchToProps
 export default connect(mapStateToProps,mapDispatchToProps)(Card)
 




