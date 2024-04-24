import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Yosh() {

    const [yash,setYash]=useState();
    useEffect(()=>{
        getkush()
    },[])
    async function getkush(){
        const data=await fetch('https://api.github.com/users/kushagra331');
        const jsondata=await data.json();
        console.log("jsondata",jsondata)
        setYash(jsondata)
    }

  return (
    <div>
      <Link to='/'><li>home</li></Link>
      <Link to='/yosh'><li>yosh</li></Link>
      Yosh
    {yash && <div>
        Login :{yash.login}
        Type : {yash.type}
     </div>}
    </div>
  )
}

export default Yosh
