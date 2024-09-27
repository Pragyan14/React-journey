import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

export default function Github(){

    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/pragyan14")
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //         })
    // },[])
    return(
        <div className={"text-center m-4 bg-gray-400 text-white p-4 text-3xl"}>
            <h1>GITHUB FOLLOWERS: {data.followers}</h1>
            <img src={data.avatar_url} alt={"img"} width={"300"}/>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/pragyan14");
    return response.json();
}