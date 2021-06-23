import React, {useEffect, useRef as ref, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import fetch from '../plugins/Fetch'
import Home from "./Home";

const Login = ({secret}) => {
    const email = ref()
    const password = ref()
    const [errMsg, setErrMsg] = useState()
    const history = useHistory()

    useEffect( () => {
        email.current.focus();
    }, []);

    const login = () => {
        const data = {
            email: email.current.value,
            password: password.current.value
        }

        fetch.post('/login', data)
            .then(res => {
                // console.log(res)
                if (res.success) {
                    console.log(res.secret)
                    localStorage.setItem('secret', res.secret)
                    secret = res.secret
                    history.push('/')
                } else {
                    console.log(res.error)
                    setErrMsg(res.error)
                }
            })

    }

    return (
        <div className='flex-col auth-box al-ct'>
            <h3>LOG IN</h3>
            <input ref={email} type="text" placeholder='Username or email' className='m-10 auth-field'/>
            <input ref={password} type="text" placeholder='Password' className='m-10 auth-field'/>
            <button onClick={login} className='m-10 auth-field'>Log in</button>
            <div>{errMsg}</div>
            <div className='m-10'>
                <span>Don't have an account? <Link to={'/register'}>Register here</Link> </span>
            </div>
        </div>
    );
};

export default Login;