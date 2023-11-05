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
    <div className="bg-orange-500 min-h-screen flex  items-center justify-center py-10 mt-20">
       
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

          <button type="submit" className="w-full bg-orange-500 text-white font-semibold rounded-md  my-5  px-2  py-3 ">
            Register
          </button>

          <div className="grid-cols-2 sm:px-0 max-w-sm">
  <button className="w-full px-20 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center">
    <svg
      className="h-6 w-6 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="-0.5 0 48 48"
      version="1.1"
    >
      {" "}
      <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs>{" "}
      <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        {" "}
        <g id="Color-" transform="translate(-401.000000, -860.000000)">
          {" "}
          <g id="Google" transform="translate(401.000000, 860.000000)">
            {" "}
            <path
              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
              id="Fill-1"
              fill="#FBBC05"
            >
              {" "}
            </path>{" "}
            <path
              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
              id="Fill-2"
              fill="#EB4335"
            >
              {" "}
            </path>{" "}
            <path
              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
              id="Fill-3"
              fill="#34A853"
            >
              {" "}
            </path>{" "}
            <path
              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
              id="Fill-4"
              fill="#4285F4"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>{" "}
    </svg>
    <span>Continue with Google</span>
  </button>
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
