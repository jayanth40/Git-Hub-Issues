import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
function Api(){
    let str = "Loading..."
    const [page,setPage] = useState(1);
    const [data, setData] = useState(false);
    useEffect(()=>{
        async  function fetchApi(){
            const response = await axios.get(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
            const issue = response.data
            setData(issue)
            
        }
        fetchApi()
    },[page])
    return(<>

    <div className="container">
        <h1 className="htext">Git Hub Issues JS</h1>
       
        {data?
        <ol>
            {data.map((iss)=>{
                
                return (<li style={{fontFamily: `Courier New, Courier, monospace`,fontSize:`18px`}}>{iss.title}</li>)
            })}
        </ol> : str}
        <p className="ptext">Page Number : {page}</p>
    </div>
    <div className="but-cont">
        <button id="prev_page" onClick={()=>{
            if(page>1){
                setPage(page-1)
            }
        }} >Previous Page</button>
        <button id="next_page" onClick={()=>{
            setPage(page => page+1)
            console.log(page)
        }}>Next Page</button>
    </div>
    </>)
}

export default Api