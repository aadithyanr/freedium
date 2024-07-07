import axios from 'axios';
import {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import BACKEND_URL from '../config'

export const Auth = ({type} : {type: "signup" | "signin"}) => {

    const navigate = useNavigate()

    type SignupInputs = {
        name: string;
        email: string;
        password: string;
    };


    const [postinputs, setPostinputs] = useState<SignupInputs>({
      name: '',
      email: '',
      password: '',
    });

    async function sendRequest() {
        try {
            const url = `${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`;
            const response = await axios.post(url, postinputs);
    
            if (response.status === 200) {
                const jwt = response.data;
                localStorage.setItem("token", jwt);
                navigate('/blogs');
            } else {
                // Handle unexpected status codes
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            // Handle network errors or API errors
            console.error('Error occurred:', error);
            // Optionally show user-friendly error message
            // setError('Failed to authenticate. Please try again.');
        }
    }    

    return(
        <div className="h-screen flex justify-center  items-center flex-col px-2">
            <div className="flex justify-center flex-col text-center gap-2">
                <div className="text-3xl font-bold text-center">
                Create An Account
                </div>
                <div className="">
                    {type === "signup" ? "Not Yet Here?" : "Ahoy, Welcome back!" }
                    <Link to={type === "signup" ? "/signup" : "/signin"} ClassName="underline decoration-gray-400 text-black font-medium rounded-md hover:bg-gray-200 transition-colors motion-reduce:transition-none duration-200"> Log In</Link>
                </div>
                
            </div> 
            <form className='mt-5 items-center flex-col justify-center'>

                    <Labelledinput label="Name" placeholder="Enter your Name" onChange={(e) => {
                        setPostinputs({...postinputs, name: e.target.value})
                    }} />

                    <Labelledinput label="Username" placeholder="Enter your Username" onChange={(e) => {
                        setPostinputs({...postinputs, email: e.target.value})
                    }} />

                    <Labelledinput label="Password" placeholder="Enter your Password" type='password' onChange={(e) => {
                        setPostinputs({...postinputs, password: e.target.value})
                    }} />

                    <button onClick={sendRequest()} className="px-8 py-2.5 mt-6 p-1rem w-full items-center text-center rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">Enter</button>

                </form>    
        </div>
    )
}

interface LabelledInputTypes {
    label: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}


export function Labelledinput({ label, placeholder, onChange, type }: LabelledInputTypes) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label.toLowerCase()}>
                {label}
            </label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="shadow appearance-none border rounded w-96 py-2 px-3 font-semibold text-text leading-tight focus:outline-none focus:shadow-outline"
                id={label.toLowerCase()}
                placeholder={placeholder} // Ensure placeholder is used here
            />
        </div>
    );
}
