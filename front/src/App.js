import './App.css';
import React, {useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Arena from "./pages/Arena";
import Inventory from "./pages/Inventory";
import Shop from "./pages/Shop";
import Leaderboard from "./pages/Leaderboard";

function App() {



    return (
        <div className="app flex-col al-ct">
            <Router>
                <Navbar/>

                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/register'}>
                        <Register/>
                    </Route>
                    <Route path={'/login'}>
                        <Login/>
                    </Route>
                    <Route path={'/arena'}>
                        <Arena/>
                    </Route>
                    <Route path={'/inventory'}>
                        <Inventory/>
                    </Route>
                    <Route path={'/shop'}>
                        <Shop/>
                    </Route>
                    <Route path={'/leaderboard'}>
                        <Leaderboard/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
