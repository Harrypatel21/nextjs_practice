import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET(req: Request){
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

export async function POST(req: Request) {
    const {username, password} = await req.json();

    const user = await client.user.create({
        data: {
            username,
            password
        }
    })
   
    if(!user) {
        return Response.json({message: "User not created"}, {status: 500});
    }
    // If user is created successfully, return the user data
    
    return Response.json(user,  {status: 200} );
}