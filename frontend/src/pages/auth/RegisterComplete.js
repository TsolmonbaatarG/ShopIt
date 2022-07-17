/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { auth } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const RegisterComplete = ({history}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useState(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation
    if (!email || !password) {
      toast.error("Имэйлээ оруулна уу");
      return;
    }

    if (password.length < 6) {
      toast.error("Нууц үг 6 тэмдэгтээс дээш байх шаардлагатай");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      //   console.log("RESULT", result);
      if (result.user.emailVerified) {
        // remove user email fom local storage
        window.localStorage.removeItem("emailForRegistration");
        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store
        console.log("user", user, "idTokenResult", idTokenResult);
        // redirect
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };




  return (
    <div>
      
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

          
            <form onSubmit={handleSubmit} className="space-y-6" >

            <h2 className="mt-1 text-center text-2xl font-extrabold text-gray-700">Бүртгэл баталгаажлаа</h2>
            
            <ToastContainer />

              
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Имэйл хаяг
                </label>
             
                
                  <input
                    id="email"
                    value={email}
                    disabled
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
              
             <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Нууц үг
                </label>
                <div className="">
                  <input
                    id="password"
                    value={password}
                    name="password"
                    type="password"
                    autoFocus
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>



              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Та манай үйлчилгээний нөхцөлийг хүлээн зөвшөөрч байна уу ?
                  </label>

                  
                </div>

                
              </div>

              <div className="flex items-center justify-end">

              </div>
             
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Бүртгүүлэх
                </button>
              </div>
            </form>

        
          </div>
        </div>
      </div>
    


    </div>
  );
};

export default RegisterComplete;
