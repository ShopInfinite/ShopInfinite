
// import React, { useState } from "react";
// import axios from 'axios'; // Import Axios
// import LogValidate from './LogValidate';
// import { Link, useNavigate } from "react-router-dom";




// function Login() {

   
//     const [values,setValues]=useState({ email:'', password:''});
//     const [error,setError]=useState({});
   
//     // Handle the change in inputs
//     const handleInputs=(e)=>{
//         setValues({...values, [e.target.name]: e.target.value}) ;       
//         console.log("input values",values);
//     }
//    // Handle submit for the form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = LogValidate(values);
//     setError(errors);
//     console.log("submit values",values);
//     // Check if there are any validation errors before sending the data
   
//       try {
//         // Make a POST request to your API endpoint
//         const response = await axios.post('http://localhost:3001/login', values);

//         // Check the response status code and handle it accordingly
      
//             // in user_id  i in id is diffrent
//       const user_Id = response.data.id;
//       console.log("id ",user_Id);
//       const token =response.data.token;
//       console.log(token)
//       console.log(response)
//       document.cookie = `token = ${token}; path=/`;
//           // Login was successful
//           console.log('Login successful:', response.data);
//         //   navigate("/");
//           // You can redirect the user or perform other actions here
     
//       } catch (error) {
//         // Handle network or other errors
//         console.error('Login error:', error);
//       }
    
//   };


//     return (
//         <section className="bg-orange-500 dark:bg-gray-900">
//             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                 <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
//                     SHOP INFINIT
//                 </a>
//                 <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                     <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

//                         <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                             Welcome Back ,Login
//                         </h1>
//                         <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
//                             <div>
//                                 <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                                 <input type="email"  onChange={handleInputs} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//                                 {error.email && <p style={{color:"red"}}>{error.email}</p>}
//                             </div>
//                             <div>
//                                 <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                                 <input type="password" onChange={handleInputs} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//                                 {error.password && <p style={{color:"red"}} >{error.password}</p>}
//                             </div>
//                             <div class="flex items-center justify-between">
//                                 <div class="flex items-start">
//                                     <div className="flex items-center h-5">
//                                         <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
//                                     </div>
//                                     <div class="ml-3 text-sm">
//                                         <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
//                                     </div>
//                                 </div>
//                                 <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
//                             </div>
//                             <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
//                             <div className="grid-cols-2 sm:px-0 max-w-sm">
//   <button className="w-full px-2 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center">
//     <svg
//       className="h-6 w-6 mr-2"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       width="800px"
//       height="800px"
//       viewBox="-0.5 0 48 48"
//       version="1.1"
//     >
//       {" "}
//       <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs>{" "}
//       <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
//         {" "}
//         <g id="Color-" transform="translate(-401.000000, -860.000000)">
//           {" "}
//           <g id="Google" transform="translate(401.000000, 860.000000)">
//             {" "}
//             <path
//               d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
//               id="Fill-1"
//               fill="#FBBC05"
//             >
//               {" "}
//             </path>{" "}
//             <path
//               d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
//               id="Fill-2"
//               fill="#EB4335"
//             >
//               {" "}
//             </path>{" "}
//             <path
//               d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
//               id="Fill-3"
//               fill="#34A853"
//             >
//               {" "}
//             </path>{" "}
//             <path
//               d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
//               id="Fill-4"
//               fill="#4285F4"
//             >
//               {" "}
//             </path>{" "}
//           </g>{" "}
//         </g>{" "}
//       </g>{" "}
//     </svg>
//     <span>Continue with Google</span>
//   </button>
// </div>


//                             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                                 Dont have an account yet? <Link to="/registration" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Login




import React, { useState } from "react";
import axios from 'axios'; // Import Axios
import LogValidate from './LogValidate';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
    const [values,setValues]=useState({ email:'', password:''});
    const [error,setError]=useState({});
   
    // Handle the change in inputs
    const handleInputs=(e)=>{
        setValues({...values, [e.target.name]: e.target.value}) ;       
        console.log("input values",values);
    }
   // Handle submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = LogValidate(values);
    setError(errors);
    console.log("submit values",values);
    // Check if there are any validation errors before sending the data
   
      try {
        // Make a POST request to your API endpoint
        const response = await axios.post('http://localhost:5000/login', values);

        // Check the response status code and handle it accordingly
      
        navigate('/');

            // in user_id  i in id is diffrent
      const user_Id = response.data.id;
      console.log("id ",user_Id);
      const token =response.data.token;
      console.log(token)
      console.log(response)
      document.cookie = `token = ${token}; path=/`;
          // Login was successful
          console.log('Login successful:', response.data);
        //   navigate("/");
          // You can redirect the user or perform other actions here
     
      } catch (error) {
        // Handle network or other errors
        console.error('Login error:', error);
      }
    
  };


    return (
        <section className="bg-orange-500 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
                    SHOP INFINIT
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome Back ,Login
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email"  onChange={handleInputs} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                {error.email && <p style={{color:"red"}}>{error.email}</p>}
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" onChange={handleInputs} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                {error.password && <p style={{color:"red"}} >{error.password}</p>}
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <div className="grid-cols-2 sm:px-0 max-w-sm">
  <button className="w-full px-2 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center">
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
                                Dont have an account yet? <Link to="/registration" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login