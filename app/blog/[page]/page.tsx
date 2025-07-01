import axios from "axios";

async function fetchBlogs(blogId: string){
    const blog = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`);

    if(blog.status !== 200){
        throw new Error("Blog not found");
    }

    return blog;


}
export default async function blogPage({params}: {params: {page: string}}){
     const blogId = (await params).page; // params is a Promise, so we await it to get the actual value

     const blog = await fetchBlogs(blogId);

        if(!blog){
            return <div>Blog not found</div>;
        }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100 text-gray-800">
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                <h1 className="text-2xl font-semibold text-center mb-4">Blog Page</h1>
                <p className="text-center">This is a dynamic blog page.</p>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{blog.data.title}</h2>
                    <p className="mt-2">{blog.data.body}</p>
                </div>
            </div>
        </div>
    );
}



