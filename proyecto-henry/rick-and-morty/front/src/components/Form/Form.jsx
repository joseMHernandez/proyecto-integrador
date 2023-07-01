import style from './Form.module.css'
import { useEffect, useState } from 'react'
import formImage from '../../images/rick.jpeg'
import validate from './validate'

const Form = ({login, email, password}) => {
    const [userData, setUserData]= useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({
        email:'',
        password:''
    })

    const handleChange = (e)=>{//Validation input form
        const {name,value}= e.target
        const newUserdata = {
            ...userData,
            [name]:value
            }
            setUserData(newUserdata)
        const errors = validate(newUserdata)
        setErrors(errors) 

       /*  setErrors(validate({...userData,[name]: value}))
        setUserData({...userData,[name]: value}) */



    }

    const handleSubmit = (e) =>{//Submit form data
        e.preventDefault()
        if(Object.entries(errors).length === 0) login(userData)
    }

    useEffect(()=> console.log(userData), [userData])

    return  (
        <div>

    <form className={style.formLogin}>
                <h1>Log In</h1>
            

                <h5 style={{color: 'white'}}>Ingresa con este Email: {email}</h5>
                <label>Email</label>
                <input name={'email'} type="email" onChange={handleChange} value={userData.email} />
                {/* Condictional render to email error input */}
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                <h5  style={{color: 'white'}}>Ingresa con esta Contraseña: {password}</h5>
                <label>Password</label>
                <input name={'password'} type="password" onChange={handleChange} value={userData.password}/>
                {/* Condictional render to password error input */}
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                <button onClick={handleSubmit} type='submit'>Submit</button>
            </form>
            

        </div>
    )
}
export default Form