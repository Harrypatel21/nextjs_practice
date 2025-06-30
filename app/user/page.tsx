import axios from 'axios'
import React from 'react'

    async function getUserDetails(){
        const user = await axios.post("http://localhost:3000/api/v1/signup", {
            username: "testuser",
            password: "testpassword"
            
        });
        if(user.status === 200){
           await new Promise(resolve => setTimeout(resolve, 5000)); // Simulating a delay
            return user.data
        } else {
            throw new Error("Failed to fetch user details")
        }
    }

async function Details() {
    const userDetails = await getUserDetails()
  return (
    <div>{JSON.stringify(userDetails)}</div>
  )
}

export default Details