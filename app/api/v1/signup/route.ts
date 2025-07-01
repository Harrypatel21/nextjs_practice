import client from "../../../db"; // Importing the Prisma client instance



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