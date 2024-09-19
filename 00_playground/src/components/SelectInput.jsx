import {useEffect, useState} from "react";

function SelectInput(currency){

    // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
    //     .then((res) => res.json() )
    //     .then((data) => {
    //         console.log(data[currency]);
    //     });


    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
            .then((res) => {return res.json()} )
            .then((res) => setData(res[currency]));

    },[currency]);
    console.log(data);


    return(
        <form>
            <select>
                <option value={"first"}>first</option>
                <option value={"second"}>second</option>
                <option value={"third"}>third</option>
            </select>
        </form>
    )
}

export default SelectInput;