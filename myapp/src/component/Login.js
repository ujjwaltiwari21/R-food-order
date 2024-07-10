import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [form, setForm] = useState({});

    const handleForm = (e) => {
        // console.log(e.target.value,e.target.name);
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const input = {
        width: '300px',
        height: '30px',
        border: 'none',
        textAlign: 'center',
        margin: '10px',
        outline: 'none',
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3030/login', {
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const text = await response.json();
        console.log(text);
    };

    return (
        <div className="flex items-center justify-center">
            <form className="my-15 bg-gray-200 py-20 px-20 rounded" onSubmit={handleSubmit}>
                <h1>name :</h1>
                <input type="text" onChange={handleForm} style={input} placeholder="enter your name" required name='name'/>
                <h1>email :</h1>
                <input type="email" onChange={handleForm} style={input} placeholder="email" required name='email'/>
                <h1>password :</h1>
                <input type="password" onChange={handleForm} style={input} placeholder="password"  required name='password'/><br />
                <input type="checkbox" /> I accept terms & conditions<br />
                <button type="submit"style={input} className="bg-blue-700 hover:bg-blue-800 my-5 py-1 px-2 rounded text-white">Submit</button>
            </form>
        </div>
    );
};

export default Login;