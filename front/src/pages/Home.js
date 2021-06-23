import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Arena from "./Arena";
import Inventory from "./Inventory";
import Shop from "./Shop";
import Leaderboard from "./Leaderboard";


const Home = () => {
    const [secret, setSecret] = useState('')
    const [page, setPage] = useState('')
    useEffect(
        () => {
            if(localStorage.getItem('secret')) {
                console.log('Secret is: ' + localStorage.getItem('secret'))
                setPage (
                    <div>
                        <div className='switch'>
                            <button onClick={ () => setLocal('ASDASD') }>Set secret ASDASD</button>
                            <button onClick={ () => setLocal('') }>Set secret empty string</button>
                            <button onClick={ () => localStorage.clear() }>Clear secret</button>
                        </div>
                        <hr/>
                        <Link to={'/arena'}>Arena</Link>
                        <br/>
                        <Link to={'/inventory'}>Inventory</Link>
                        <br/>
                        <Link to={'/shop'}>Shop</Link>
                        <br/>
                        <Link to={'/leaderboard'}>Leaderboard</Link>
                    </div>
                )
            } else {
                console.log('No secret')
                setPage (
                    <div>
                        <div className='switch'>
                            <button onClick={ () => setLocal('secret', 'ASDASD') }>Set secret ASDASD</button>
                            <button onClick={ () => setLocal('secret', '') }>Set secret empty string</button>
                            <button onClick={ () => localStorage.clear() }>Clear secret</button>
                        </div>
                        <hr/>
                        <h1>WELCOME TO MY SHITTY APP</h1>
                        <hr/>
                        <Link secret={setSecret(secret)} to={'/login'}>Log in</Link>
                        <br/>
                        <Link secret={setSecret(secret)} to={'/register'}>Register</Link>
                    </div>
                )
            }
        }
    , [] )

    const setLocal = (key, value) => {
        setSecret(value)
        localStorage.setItem('secret', value)
    }

    return (page)

};

export default Home;