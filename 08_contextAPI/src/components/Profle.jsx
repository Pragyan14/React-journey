import React,{useContext} from "react";
import userContext from "../context/UserContext.js";

function Profile(){

    const {user} = useContext(userContext);

    if(!user) return <h2>Please Login</h2>

    return (
        <>
            <h2>Hello! {user.username}</h2>
        </>
    )
}

export default Profile;