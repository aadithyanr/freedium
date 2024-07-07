import { AppBar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return (

        <div>
            <AppBar />

            <div className="flex justify-center">
                <div className="max-w-xl">
                <BlogCard 
                authorName={"Aadithyan Nair"}
                title={"Embarking on an Epic Journey to the Majestic Pinnacles of Life that is so  and..."}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                publishedDate={"15/11/2005"}            
            />
    
            <BlogCard 
                authorName={"Aadithyan Nair"}
                title={"Embarking on an Epic Journey to the Majestic Pinnacles of Life that is so  and..."}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                publishedDate={"15/11/2005"}            
            />
    
            <BlogCard 
                authorName={"Aadithyan Nair"}
                title={"Embarking on an Epic Journey to the Majestic Pinnacles of Life that is so  and..."}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                publishedDate={"15/11/2005"}            
            />
                </div>
            </div>
            
        </div>
            
    );
}