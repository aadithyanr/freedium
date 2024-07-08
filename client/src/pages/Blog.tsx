import { useParams } from "react-router-dom";
import { AppBar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlogs(id || ""); // Pass id directly as an argument

    if(loading || !blog) {
        return <div>
            <AppBar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    Hold tight.
                </div>
            </div>
        </div>
    }

    return(
        <FullBlog />
    )
}  

export default Blog; // Add this line to explicitly export the Blog component