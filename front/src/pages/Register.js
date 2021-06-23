import React, {useState, useRef as ref, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import fetch from '../plugins/Fetch'

const Register = ({secret}) => {
    const [errMsg, setErrMsg] = useState()
    const history = useHistory()
    const username = ref()
    const email = ref()
    const pw1 = ref()
    const pw2 = ref()
    const user1 = {
        un: ref(),
        email: ref(),
    }

    // useEffect(() => {
    //     let data = ['username', 'email', 'pw1', 'pw2']
    //     inputRef.current = new Array(data.length)
    //     setData(data)
    // }, []);

    useEffect( () => {
        username.current.focus();
    }, []);

    const reg = () => {
        const data = {
            username: username.current.value,
            email: email.current.value,
            pw1: pw1.current.value,
            pw2: pw2.current.value
        }

        fetch.post('/register', data)
            .then(res => {
                if (res.success) {
                    console.log(res)
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
            <h3>REGISTER</h3>
            <input ref={username} type="text" placeholder='Username' className='m-10 auth-field'/>
            <input ref={email} type="text" placeholder='Email' className='m-10 auth-field'/>
            <input ref={pw1} type="text" placeholder='Password' className='m-10 auth-field'/>
            <input ref={pw2} type="text" placeholder='Repeat password' className='m-10 auth-field'/>
            <p className='msg'>{errMsg}</p>
            <button onClick={reg} className='m-10 auth-field'>Register</button>
            <div className='m-10'>
                <span>Already have an account? <Link to={'/login'}>Log in here</Link> </span>
            </div>
        </div>
    );
};

export default Register;