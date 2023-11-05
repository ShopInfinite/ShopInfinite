import { Card } from "@material-tailwind/react";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";




// 4242424242424242
const stripePromise = loadStripe(
  "pk_test_51O8NuQEIz9ME8FdtidPMxYDbkHqiyO1bTnGqAGOCviveQeNG9tqmb1w8RxYnJlDcb4KOOwWtIfOpi4gqPURVBAPt005llo53qR"
);

const PaymentForm = ({total}) => {
   




  const ApiUrl = process.env.REACT_APP_API_URL;

  const stripe = useStripe();
  const elements = useElements();

  const [userEmail, setUserEmail] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const [totalPrice, setTotalPrice] = useState(0.5);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePay = async (event) => {
    event.preventDefault();

    const currentDate0 = new Date();

    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    // Validate inputs...
    try {
      const cardElement = elements.getElement(CardElement);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: cardholder,
          email: userEmail.toLowerCase(),
        },
      });

      if (error) {
        showAlert(error.message, "error");
        return;
      }

      console.log("paymentMethod");
      console.log(paymentMethod);
      console.log("paymentMethod");
      // Send payment information to your server using Axios
      const response = await axios.post(`http://localhost:3001/charge`, {
        paymentMethodId: paymentMethod.id,
        email: userEmail.toLowerCase(),
        phone: userPhone,
        cardholder: cardholder,
        amount: total,
        country: country,
        state: state,
        address: address,
        user_id: 33,
      });

      localStorage.removeItem("items");
      localStorage.removeItem("itemsQ");

      showAlert("Payment successful!", "success");
    } catch (error) {
      showAlert("An error occurred. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (message, icon) => {
    Swal.fire({
      title: icon === "success" ? "Success" : "Error",
      text: message,
      icon: icon,
      confirmButtonText: "OK",
    });
  };
  return (
    <>
<h1>{total}</h1>
      {true ? (
        <>
          <Card className=" w-8/12 mx-auto bg-gray-50 px-4 pt-8 lg:mt-5 ">
            <p className="text-xl mt-20 font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <h2 className=" text-xl font-bold">Total : {total}</h2>
            <form onSubmit={handlePay} className="">
              {/* Email input */}
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
                {/* ... */}
              </div>
              <div>
                {/* Phone input */}
                <label
                  htmlFor="phone"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <PhoneInput
                    id="phone"
                    name="phone"
                    value={userPhone}
                    onChange={setUserPhone}
                    placeholder="Enter phone number"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  {/* ... */}
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="country" className="block font-medium">
                  Country:
                </label>
                <input
                  type="text"
                  id="country"
                  className="w-full border rounded-lg p-2"
                  value={country}
                  onChange={handleCountryChange}
                />
                <label htmlFor="state" className="block font-medium">
                  State:
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full border rounded-lg p-2"
                  value={state}
                  onChange={handleStateChange}
                />

                <label htmlFor="address" className="block font-medium">
                  Address Line:
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full border rounded-lg p-2"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>

              {/* Card Holder input */}
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                  value={cardholder}
                  onChange={(e) => setCardholder(e.target.value)}
                  required
                />
                {/* ... */}
              </div>
              {/* ... */}
              <label
                htmlFor="card-details"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="mb-4">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>

              {loading ? (
                <button
                  disabled=""
                  type="button"
                  className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                >
                  Place Order
                </button>
              )}
            </form>
          </Card>
        </>
      ) : (
        <Card className="my-10 w-8/12 h-[50vh] mx-auto bg-gray-50 px-4 pt-8 lg:mt-5">
          <p className="text-center">No Products in your Cart</p>
        </Card>
      )}
    </>
  );
};

const Payment = () => {
    
    const location = useLocation();
    const total = location.state?.total; // Use optional chaining to handle null/undefined
  
    console.log('Total in Payment component:', total);

  return (
  
    <Elements stripe={stripePromise}>
      <PaymentForm total={total} />
    </Elements>
  );
};

export default Payment;
