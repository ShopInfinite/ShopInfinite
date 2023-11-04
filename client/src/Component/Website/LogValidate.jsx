import React from 'react'

const LogValidate = (values) => {

     const error={}

    const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passPattern=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(!emailPattern.test(values.email)){
        error.email="Not Correct Email "
      }
    if(!passPattern.test(values.password)){ 
       error.password="Minimum eight characters, at least one letter, one number and one special character";
    }

  return  error;

  
}

export default LogValidate;