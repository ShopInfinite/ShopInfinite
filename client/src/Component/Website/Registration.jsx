// import React, { useState } from "react";
// import RegValidate from "./RegValidate";
// import axios from 'axios';
// // import Registration from'../CSS/Registration.css'

// const Registration = () => {


//   const [values,setValues]=useState({ firstname:'' , lastname:'' , email:'', password:'',city:'', address:'',phoneNumber:''});
//   const [error,setError]=useState({});

// // Handle the change in inputs
// const handleInputs=(e)=>{
//     setValues({...values, [e.target.name]: e.target.value}) ;    
    
// }

// // Handle submit for the form 
// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const errors = RegValidate(values);
//     setError(errors);

//     // Check if there are any validation errors before sending the data
//   if (Object.keys(errors).length === 0) {
//     try {
//       // Make a POST request to your API endpoint
//       console.log('Submitting the form...');
//       const response = await axios.post('http://localhost:3001/users', values);
      
//       // Check the response status code and handle it accordingly
//       if (response.status === 200) {
//         // Registration was successful
//         console.log('Registration successful:', response.data);
//       } else {
//         // Handle other status codes or error scenarios
//         console.error('Registration failed:', response.data);
//       }
//     } catch (error) {
//       // Handle network or other errors
//       console.error('Registration error:', error);
//     }
//   }
// }
//   return (

   
// <div className="mx-80 my-20  border-black border-2 p-10 bg-orange-500" >
//   <div>
//   <h1 className="text-4xl font-bold text-center">SHOP INFINITE</h1>
//   </div>
//   <br/>
//   <hr/>
//   <br/>
//   <h1 className="text-1xl font-bold text-start">please fill the form for creat account in our website</h1>

//   <br/>
//   <hr/>
//   <br/>
//       <form onSubmit={handleSubmit} >
//         <div className="flex flex-col">
//           <label className="mb-2 text-m font-medium text-black">First Name</label>
//           <input
//             type="text"
//             name='firstname'
//             placeholder="Enter your first name"
//             // value={firstName}
//             onChange={handleInputs}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//           />
//         </div>

//         <div className="flex flex-col mt-4">
//           <label  className="mb-2 text-m font-medium text-black">Last Name</label>
//           <input
//             type="text"
//             name="lastname"
//             placeholder="Enter your last name"
//             // value={lastName}
//             onChange={handleInputs}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//           />
//         </div>

//         <div className="flex flex-col mt-4">
//           <label  className="mb-2 text-m font-medium text-black">Phone Number</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="Enter your phone number"
//             // value={phoneNumber}
//             onChange={handleInputs}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//           />
//         </div>

        // <div className="flex flex-col mt-4">
        //   <label  className="mb-2 text-m font-medium text-black">City</label>
        //   <select
        //     name="city"
        //     // value={city}
        //     onChange={handleInputs}
        //     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        //   >
        //     {/* TODO: Populate the city options dynamically */}
        //     <option value="">Select a city</option>
        //     <option value="Amman">Amman</option>
        //     <option value="Irbid">Irbid</option>
        //     <option value="Zarqa">Zarqa</option>
        //     <option value="Ajloun">Ajloun</option>
        //     <option value="Ma'an">Ma'an</option>
        //     <option value="Madaba">Madaba</option>
        //     <option value="Aqaba">Aqaba</option>
        //     <option value="As-Salt">As-Salt</option>
        //     <option value="Jerash">Jerash</option>
        //     <option value="Al-Mafraq">Al-Mafraq</option>
        //     <option value="Kerak">Kerak</option>
        //     <option value="At-Tafilah">At-Tafilah</option>
        //     {/* ... */}
        //   </select>
        // </div>
//         <div className="flex flex-col mt-4">
//           <label  className="mb-2 text-m font-medium text-black">Email</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="Enter your Email"
//             // value={lastName}
//             onChange={handleInputs}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//           />  {error.email && <p style={{color:"black"}}>{error.email}</p>}
          
//         </div>
//         <div className="flex flex-col mt-4">
//           <label  className="mb-2 text-m font-medium text-black">Address</label>
//           <input
//             type="text"
//             name="address"
//             placeholder="Enter your Address"
//             // value={lastName}
//             onChange={handleInputs}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//           />
          
//         </div>
//         <div className="flex flex-col mt-4">
//           <label  className="mb-2 text-m font-medium text-black">Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             // value={password}
//             onChange={handleInputs}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//           />  {error.password && <p style={{color:"black"}} >{error.password}</p>}
//         </div>

//         <button type="submit" className="mt-4 px-4 py-2 hover:bg-orange-400 text-white font-semibold rounded-md bg-black">
//           Register
//         </button>
//       </form>
//       </div>
//   );
// };

// export default Registration;












import React, { useState } from "react";
import RegValidate from "./RegValidate";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Registration = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password:'',
    city: '',
    address: '',
    phoneNumber: '',
  });
  const [error, setError] = useState({});

  // Handle the change in inputs
  const handleInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

  }

  // Handle submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = RegValidate(values);
    setError(errors);
   
    // Check if there are any validation errors before sending the data
    // if (Object.keys(errors).length === 0) {
      try {
        // Make a POST request to your API endpoint
        console.log("axios");
        const response = await axios.post('http://localhost:3001/users',values);
        console.log('Submitting the form...');
        // Check the response status code and handle it accordingly
      
          // Registration was successful
          console.log('Registration successful:', response.data);
      
      } catch (error) {
        // Handle network or other errors
        console.error('Registration error:', error);
      }
    
  }

  return (
    <div className="bg-orange-500 min-h-screen flex  items-center justify-center py-10">
       
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center">SHOP INFINITE</h1>
    
        <h1 className=" font-bold text-center mt-4">Please fill out the form to create an account</h1>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="mb-2 text-sm font-medium text-black">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              onChange={handleInputs}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 text-sm font-medium text-black">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              onChange={handleInputs}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 text-sm font-medium text-black">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              onChange={handleInputs}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col mt-4">
          <label  className="mb-2 text-m font-medium text-black">City</label>
          <select
            name="city"
            // value={city}
            onChange={handleInputs}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          >
            {/* TODO: Populate the city options dynamically */}
            <option value="">Select a city</option>
            <option value="Amman">Amman</option>
            <option value="Irbid">Irbid</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Ajloun">Ajloun</option>
            <option value="Ma'an">Ma'an</option>
            <option value="Madaba">Madaba</option>
            <option value="Aqaba">Aqaba</option>
            <option value="As-Salt">As-Salt</option>
            <option value="Jerash">Jerash</option>
            <option value="Al-Mafraq">Al-Mafraq</option>
            <option value="Kerak">Kerak</option>
            <option value="At-Tafilah">At-Tafilah</option>
            {/* ... */}
          </select>
        </div>

          <div className="mb-4">
            <label className="mb-2 text-sm font-medium text-black">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              onChange={handleInputs}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>

          <div className="mb-4">
            <label className="mb-2 text-sm font-medium text-black">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your Address"
              onChange={handleInputs}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 text-sm font-medium text-black">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInputs}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {error.password && <p className="text-red-500">{error.password}</p>}
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white font-semibold rounded-md py-2">
            Register
          </button>

          <div >
           <button type="button" class="text-white w-full mt-5 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
               Already have an account ? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
