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