import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="flex justify-between border-b px-10 py-4">
            <h1 className="font-extrabold flex justify-center text-2xl text-center items-center">Medium</h1>
        <div>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
            <Avatar size="big" name="Aadi" />
        </div>
    </div>
}