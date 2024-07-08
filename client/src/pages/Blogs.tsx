import { AppBar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if (loading) {
        return(
            <div>
                <AppBar />
            <div className="flex flex-col justify-center items-center">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
            </div>
        )
    }

    return (

        <div>
            <AppBar />

            <div className="flex justify-center">
                <div className="">
                {blogs.map(blog => (
                    <BlogCard
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"15/11/2005"}            
                    />
                ))}

                </div>
            </div>
            
        </div>
            
    );
}