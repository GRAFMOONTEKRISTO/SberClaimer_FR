import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Fips from "./components/Fips/Fips";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs state={props.state.messagesPage} />}/>
                        <Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>
                        <Route path='/fips' element={<Fips/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;