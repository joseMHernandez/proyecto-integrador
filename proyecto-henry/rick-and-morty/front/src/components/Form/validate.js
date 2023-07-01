export default function validate ({email, password}) {
  // email: "h;kjlksdvlnsdlvnsdvnlsndvlnsdvlknsdvl"
  let errors = {}
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexIncludesNumber = /\d/
  if(!regexEmail.test(email)) {
      errors.email = "Debe ser un mail"
  }
  if(email.length === 0) {
      errors.email = "No puede estar vacio"
  }
  if(email.length > 35) {
      errors.email = "No puede ser mayor de 35"
  }
  if(!regexIncludesNumber.test(password)){
      errors.password = "Debe contener al menos un numero"
  }
  if(password.length < 6 || password.length > 10){
      errors.password = "Debe ser entre 6 y 10 caracteres"
  }
  return errors

}