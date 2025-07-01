import client from "../../../db"; // Importing the Prisma client instance

export async function POST(req: Request){
    const {username, password} = await req.json();
    // Check if the user already exists
    

    const existingUser = await client.user.findUnique({
        where: {
            username,
            password
        }
    })

    if(existingUser) {
        return Response.json({message: "logged in successfully"}, {status: 200});
    }

    // If user does not exist, create a new user

    return Response.json({message: "User not found"}, {status: 404});
   
}