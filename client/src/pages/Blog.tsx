import { useParams } from "react-router-dom";
import { AppBar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blogs } = useBlog({
        id: id || ""
    });

    if(loading || !blogs) {
        return <div>
            <AppBar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    Loading...
                </div>
            </div>
        </div>
    }

    return <div>
       <FullBlog blog={blogs} />
    </div>
}  

export default Blog;