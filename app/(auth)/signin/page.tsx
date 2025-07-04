// Enables the component to use client-side rendering in a Next.js application
"use client";

import axios from "axios"; // Importing axios for making HTTP requests
import React from "react"; // Importing React for building the component
import { useRouter } from "next/navigation";

// const getUserDetails = async (username: string, password: string) => {
//     const client = new PrismaClient(); // Creating a new Prisma client instance
//     // Fetching user details from the database based on username and password
//     const  user = await client.user.findUnique({
//         where: {
//             username,
//             password
//         }
//     })
//     return user; // Returning the user details

// } 

// can't use PrismaClient in the browser, so we will use axios to call the API route

// Defining the Signin component
export default function Signin() {
    const [username, setUsername] = React.useState(''); // State for username input
    const [password, setPassword] = React.useState(''); // State for password input
    const router = useRouter(); // Using Next.js router for navigation
    return (
        // Outer container to center the sign-in form on the screen
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100 text-gray-800">
            {/* Card container for the sign-in form */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                {/* Sign-in header */}
                <h1 className="text-2xl font-semibold text-center mb-4">Sign In</h1>
                
                {/* Form elements container with gap between items */}
                <div className="flex flex-col gap-4">
                    {/* Input field for entering the username */}
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setUsername(e.target.value)} // Updating username state on input change
                    />

                    {/* Input field for entering the password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)} // Updating password state on input change
                    />

                    {/* Submit button to send the sign-in request */}
                    <button
                        onClick={() => {
                            // Sending a POST request to the backend API for sign-in
                            axios.post("http://localhost:3000/api/v1/signin", {
                                username,
                                password
                            }).then(response => {
                                console.log(response.data); // Logging the response data
                                if (response.status === 200) {
                                    // If sign-in is successful, redirect to the home page
                                    router.push("/");
                                } else {
                                    // If sign-in fails, log the error message
                                    console.error("Sign-in failed:", response.data.message);
                                }
                            }).catch(error => {
                                console.error(error); // Logging any errors that occur
                            });
                        }}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}