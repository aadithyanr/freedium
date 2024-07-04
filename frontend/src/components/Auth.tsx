import {useState} from 'react';
import { ChangeEventHandler } from "react";
import { Link } from "react-router-dom";


export const Auth = ({ type }: { type: 'signup' | 'signin' }) => {

    type SignupInputs = {
        name: string;
        username: string;
        password: string;
    };


    const   [postinputs, setPostinputs] = useState<SignupInputs>({
      name: '',
      username: '',
      password: '',
    });
  
  
    return(
        <div className="h-screen flex justify-center  items-center flex-col px-2">
            <div className="flex justify-center flex-col text-center gap-2">
                <div className="text-3xl font-bold text-center">
                Create An Account
                </div>
                <div className=" ">
                    Already have an Account? 
                    <Link ClassName="underline decoration-gray-400 text-black font-medium rounded-md hover:bg-gray-200 transition-colors motion-reduce:transition-none duration-200"> Log In</Link>
                </div>
                
            </div> 
            <form className='mt-5 items-center flex-col justify-center'>

                    <Labelledinput label="Name" placeholder="Enter your Name" onChange={(e) => {
                        setPostinputs({...postinputs, name: e.target.value})
                    }} />

                    <Labelledinput label="Username" placeholder="Enter your Username" onChange={(e) => {
                        setPostinputs({...postinputs, username: e.target.value})
                    }} />

                    <Labelledinput label="Password" placeholder="Enter your Password" type='password' onChange={(e) => {
                        setPostinputs({...postinputs, password: e.target.value})
                    }} />

                    <button className="px-8 py-2.5 mt-6 p-1rem w-full items-center text-center rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">Gradient</button>

                </form>    
        </div>
    )
}

interface LabelledInputTypes {
    label: String;
    placeholder: String;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function Labelledinput({ label, placeholder, onChange, type }: LabelledInputTypes) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                {label}
            </label>
            <input onChange={onChange} type={type || "text"} className="shadow appearance-none border rounded w-full py-2 px-3 font-semibold text-text leading-tight focus:outline-none focus:shadow-outline w-96 p-2rem	" id="username" placeholder={"placeholder"} />
        </div>
    )
}