// // import React, { useState } from 'react';
// // import { useMutation } from "@apollo/client";
// // import { Login } from "../utils/mutations"
// // import Auth from '../utils/auth'
// const Login = (props) => {
//     const [userFormData, setUserFormData] = useState({ email: '', password: '' });
//     const [validated] = useState(false);
//     const [showAlert, setShowAlert] = useState(false);
//     const [login, { error }] = useMutation(Login);
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setUserFormData({ ...userFormData, [name]: value });
//     };
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }
//         try {
//             const { data } = await login({
//                 variables: { ...userFormData },
//             });
//             console.log ( data );
//             Auth.login(data.loginUser.token);
//         } catch (err) {
//             console.error(err);
//             setShowAlert(true);
//         }
//         setUserFormData({
//             username: '',
//             email: '',
//             password: '',
//         });
//     };
//     return (
//         <>
//         </>
//     )
// }
import React from 'react';
import SignUp from './SignUp';
export default function Login() {
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-4 space-y-2 md:space-y-6 sm:p-8">
                        <h1 className="text-xl leading-tight tracking-tight text-slate-400 md:text-2xl">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label for="username" className="block mb-3 text-sm font-medium text-slate-950">username</label>
                                <input type="username" name="username" id="username" className="bg-zinc-100 border border-zinc-500 text-zinc-950 sm:text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5"></input>
                            </div>
                            <div>
                                <label for="password" className="block mb-3 text-sm font-medium text-slate-950">password</label>
                                <input type="password" name="password" id="password" className="bg-zinc-100 border border-zinc-500 text-zinc-950 sm:text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5"></input>
                            </div>
                            <button type="submit" class="w-full text-white bg-zinc-400 hover:bg-zinc-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
            <SignUp/>
        </section>
    );
}