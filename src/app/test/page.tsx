"use client"

import React, { useState } from 'react'
import { getUser } from '../action/user';

const TestPage = () => {

    const [data, setData] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);

    const handleClick = async () => {

        try {
            const dataFromDB = await getUser(email);
            setData(dataFromDB);
        } catch (err) {
            setData(JSON.stringify(err));
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const email = formData.get("email") as string;
        setEmail(email);
    }

    return (
        <div className='bg-amber-300 text-black'>
            Hello Dummy

           <form onSubmit={handleSubmit}>
                <input
                    title="Enter email"
                    placeholder="email here.."
                    type="text"
                    name="email"
                />
                <button type="submit">Submit</button>
            </form>

            
            <button
                onClick={handleClick}
                className='p-4 bg-blue-400'
            >
                Click Me!
            </button>

            <div className='p-14 bg-pink-800 text-amber-50'>
                {data}
            </div>
        </div>

    )
}

export default TestPage